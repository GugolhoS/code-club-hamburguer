import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PropTypes from "prop-types";
import React from "react";

import { useUser } from '../../hooks/UserContext'
import ListLinks from './menu-list'
import { Container, ItenContainer, ListLink} from './styles';

export function SideMenuAdmin({ path }){
    const { logout } = useUser()
    return <Container>
        <hr></hr>
        {ListLinks.map( item => (
            <ItenContainer key={item.id} isActive={path === item.link}>
                <item.icon className="icon" />
                <ListLink to={item.link}>{item.label}</ListLink>
            </ItenContainer>
        ))}
        <hr></hr>
        <ItenContainer style={{position: 'fixed', bottom:'30px'}}>
            <ExitToAppIcon style={{color: '#fff'}}/>
            <ListLink to="/login" onClick={logout}>Sair</ListLink>
        </ItenContainer>
    </Container>
}

SideMenuAdmin.propTypes = {
    path: PropTypes.string
}

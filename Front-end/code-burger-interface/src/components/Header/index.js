import React from "react";
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from "../../hooks/UserContext";
import { Container, ContainerLeft, ContainerRight, PageLink, ContainerText, LineVertical, PageLinkExit } from './styles';

export function Header(){
    const { logout, userData } = useUser()
    const navigate = useNavigate();
    const location = useLocation().pathname;

    const logoutUser = () => {
        logout()
        navigate("/login")
    }

    return <Container>
        <ContainerLeft>
            <PageLink onClick={() => navigate("/")} isActive={location === "/"}>
                Home
            </PageLink>
            <PageLink onClick={() => navigate("/produtos")} isActive={location.includes("produtos")}>
                Ver Produtos
            </PageLink>
        </ContainerLeft>
        <ContainerRight>
            <PageLink onClick={() => navigate("/carrinho")} isActive={location === "/carrinho"}>
                <img src={Cart} alt="carrinho" />
            </PageLink>
            <LineVertical></LineVertical>
            <PageLink>
                <img src={Person} alt="pessoa" />
            </PageLink>
            <ContainerText>
                <p>Olá, {userData.name}</p>
                <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
            </ContainerText>
        </ContainerRight>
    </Container>
}

import PropTypes from 'prop-types'
import React from "react";
import { Navigate } from 'react-router-dom'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarousel from '../../components/CategoryCarousel';
import OffersCarousel from '../../components/OffersCarousel'
import { Container, HomeImg } from './styles';

function Home({ component, ...rest}){
    const user = localStorage.getItem('codeburger:userData')

    if(!user){
        return <Navigate to="/login" replace />;
    }

    return <Container>
        <HomeImg src={HomeLogo} alt="logo da home" />
        <CategoryCarousel />
        <OffersCarousel />
    </Container>
}

export default Home

Home.propTypes = {
    component:PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

// Isso é inutil nas versõs atuais

import PropTypes from 'prop-types';
import React from "react";
import { Route, Navigate } from 'react-router-dom';

import { Header } from '../components';

function PrivateRoute({ element: Element, ...rest }) {
    const user = localStorage.getItem('codeburger:userData');

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Header />
            <Route {...rest} element={<Element />} />
        </>
    );
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    element: PropTypes.elementType.isRequired
}

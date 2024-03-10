import React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

import { Header } from '../components';
import paths from '../Constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../containers';
import { useUser } from "../hooks/UserContext";

function RoutesBrowser() {
    const { userData } = useUser();

    const isAdminRouteAllowed = (element, isAdmin) => {
        if(userData.id === undefined){
            return element;
        }

        if (isAdmin && !userData.admin) {
            return <Navigate to="/" replace />;
        } else if (!isAdmin && userData.admin){
            return <Navigate to={paths.Order} replace />;
        } else {
            return element;
        }
    }

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
            </Routes>
            {
                [
                    !userData.admin && <Header key="header" />
                ]
            }
            <Routes>
                <Route exact path="/" element={isAdminRouteAllowed(<Home />)} />
                <Route path="/produtos" element={isAdminRouteAllowed(<Products />)} />
                <Route path="/carrinho" element={isAdminRouteAllowed(<Cart />)} />
            </Routes>
            <Routes>
                <Route path={paths.Order} element={isAdminRouteAllowed(<Admin path={paths.Order} />, true)} />
                <Route path={paths.Products} element={isAdminRouteAllowed(<Admin path={paths.Products} />, true)} />
                <Route path={paths.NewProduct} element={isAdminRouteAllowed(<Admin path={paths.NewProduct} />, true)} />
                <Route path={paths.EditProduct} element={isAdminRouteAllowed(<Admin path={paths.EditProduct} />, true)} />
            </Routes>
        </Router>
    );
}

export default RoutesBrowser;

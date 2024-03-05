import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Products from '../containers/Products'
import Register from '../containers/Register'
// import PrivateRoute from './private-route'

function RoutesBrowser(){
    return (
        <Router>
            <Routes>
                <Route component={Login} path="/login" element={<Login />} />
                <Route component={Register} path="/cadastro" element={<Register />} />
                <Route exact component={Home} path="/" element={<Home />} />
                <Route component={Products} path="/produtos" element={<Products />} />
            </Routes>
        </Router>
    )
}

export default RoutesBrowser
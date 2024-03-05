import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
// import PrivateRoute from './private-route'

function RoutesBrowser(){
    return (
        <Router>
            <Routes>
                <Route component={Login} path="/login" element={<Login />} />
                <Route component={Register} path="/cadastro" element={<Register />} />
                <Route exact component={Home} path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default RoutesBrowser
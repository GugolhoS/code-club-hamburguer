import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import {Home, Login, Products, Register} from '../containers'
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
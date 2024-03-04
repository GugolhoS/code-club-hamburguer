import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'

function RoutesBrowser(){
    return (
        <Router>
            <Routes>
                <Route Component={Login} path="/login" />
                <Route Component={Register} path="/cadastro" />
            </Routes>
        </Router>
    )
}

export default RoutesBrowser
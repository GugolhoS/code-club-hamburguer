// No curso fala para fazer tudo isso, mas estava dando erro, então passei toda essa config para a propria pagina que deve ser privada (Home/index.js)


import PropTypes from 'prop-types'
import React from "react";
import { Route,  Navigate  } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }){
    const user = localStorage.getItem('codeburger:userData')

    if(!user){
        return <Navigate to="/login" replace />;
    }

    return <Route {...rest} element={<Component />} />;
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component:PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
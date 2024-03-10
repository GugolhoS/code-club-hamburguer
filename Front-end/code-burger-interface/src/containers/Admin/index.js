import PropTypes from "prop-types";
import React from "react";

import { SideMenuAdmin } from "../../components";
import paths from '../../Constants/paths'
import { EditProduct } from "./EditProduct";
import { ListProducts } from './ListProducts'
import { NewProducts } from "./NewProduct";
import Orders from './Orders'
import { Container, ContainerItems } from "./styles";


export function Admin({ path }){
    return(
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItems>
                {path === paths.Order && <Orders/>}
                {path === paths.Products && <ListProducts />}
                {path === paths.NewProduct && <NewProducts />}
                {path === paths.EditProduct && <EditProduct />}
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    path: PropTypes.string
}
import PropTypes from 'prop-types'
import React from "react";

import {Button} from '../';
import { Container, Image, ProductName, ProductPrice } from '../CardProduct/styles';

export function CardProduct( {product} ){

    return (
        <Container>
            <Image src={product.url} alt="Image do Produto"/>
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button>Adicionar</Button>
            </div>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object
}

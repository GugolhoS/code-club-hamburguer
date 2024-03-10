import PropTypes from 'prop-types'
import React from "react";

import {Button} from '../';
import {useCart} from '../../hooks/CartContext'
import { Container, Image, ProductName, ProductPrice } from '../CardProduct/styles';

export function CardProduct( {product} ){
    const {putProductInCart} = useCart()
    return (
        <Container>
            <Image src={product.url} alt="Image do Produto"/>
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
            </div>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object
}

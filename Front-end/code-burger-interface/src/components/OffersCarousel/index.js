import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'
import { useNavigate } from "react-router-dom";

import Offers from '../../assets/offers.png'
import {useCart} from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles';

export function OffersCarousel(){
    const {putProductInCart} = useCart()
    const [offers, setOffers] = useState([])
    const navigate = useNavigate()

    useEffect( () => {
        async function LoadOffers(){
            const { data } = await api.get("products")
            const onlyOffers = data.filter( product => product.offer).map( product => {
                return {...product, formatedPrice: formatCurrency(product.price)}
            })

            setOffers(onlyOffers)
        }

        LoadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 400, itemsToShow: 2},
        { width: 600, itemsToShow: 3},
        { width: 900, itemsToShow: 4},
        { width: 1300, itemsToShow: 5}
    ]

    return <Container>
        <CategoryImg src={Offers} alt="logo da ofertas" />

        <Carousel itemsToShow={5} style={{width: '90%', margin: '20px'}} breakPoints={breakPoints}>
            {
                offers && offers.map( product => (
                    <ContainerItems key={product.id}>
                        <Image src={product.url} alt="foto das ofertas" />
                        <p>{product.name}</p>
                        <p>{product.formatedPrice}</p>
                        <Button onClick={() => {
                            putProductInCart(product)
                            navigate('/carrinho')
                        }}>Peça agora!</Button>
                    </ContainerItems>
                ))
            }
        </Carousel>
    </Container>
}

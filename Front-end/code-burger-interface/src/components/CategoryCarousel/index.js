import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles';

export function CategoryCarousel(){
    const [categories, setCategories] = useState([])

    useEffect( () => {
        async function LoadCategories(){
            const { data } = await api.get("categories")

            setCategories(data)
        }

        LoadCategories()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 400, itemsToShow: 2},
        { width: 600, itemsToShow: 3},
        { width: 900, itemsToShow: 4},
        { width: 1300, itemsToShow: 5}
    ]
    
    return <Container>
        <CategoryImg src={Category} alt="logo da category" />

        <Carousel itemsToShow={5} style={{width: '90%', margin: '20px'}} breakPoints={breakPoints}>
            {
                categories && categories.map(category => (
                    <ContainerItems key={category.id}>
                        <Image src={category.url} alt="foto da categoria" />
                        <Button as={Link} to={{ pathname: '/produtos'}} state={{categoryId: category.id}}>{category.name}</Button>
                    </ContainerItems>
                ))
            }
        </Carousel>
    </Container>
}

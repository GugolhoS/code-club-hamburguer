import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom'

import ProductsLogo from '../../assets/products-logo.svg'
import api from '../../services/api'
import { Container, ProductsImg, CategoryButton, CategoriesMenu } from './styles';

function Products(){
    const [categories, setCategories] = useState([])
    const [activeCategories, setActiveCategories] = useState(0)

    useEffect(() => {
        async function LoadCategories(){
            const { data } = await api.get("categories")

            const newCategories = [{ id: 0, name: "Todas"}, ...data]

            setCategories(newCategories)
        }

        LoadCategories()
    }, [])

    const user = localStorage.getItem('codeburger:userData')
    if(!user){
        return <Navigate to="/login" replace />;
    }

    return (
        <Container>
            <ProductsImg src={ProductsLogo} alt="logo dos produtos" />
            <CategoriesMenu>
                { categories && categories.map(category => (
                    <CategoryButton 
                    type="button" 
                    key={category.id} 
                    isActiveCategory={activeCategories === category.id}
                    onClick={() => {
                        setActiveCategories(category.id)
                    }}>{category.name}</CategoryButton>
                ))}
            </CategoriesMenu>
        </Container>
    )
}

export default Products

Products.propTypes = {
    component:PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}

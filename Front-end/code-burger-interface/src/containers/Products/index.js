import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

import ProductsLogo from '../../assets/products-logo.svg'
import {CardProduct} from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency';
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles';

export function Products(){
    const { state } = useLocation();
    const categoryId = state?.categoryId || 0;
    
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategories, setActiveCategories] = useState(categoryId)

    useEffect(() => {
        async function LoadCategories(){
            const { data } = await api.get("categories")

            const newCategories = [{ id: 0, name: "Todas"}, ...data]

            setCategories(newCategories)
        }

        async function LoadProducts(){
            const { data: allProducts } = await api.get("products")

            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price)}
            })
            setProducts(newProducts)
        }

        LoadProducts()
        LoadCategories()
    }, [])

    useEffect(() => {
        if(activeCategories === 0){
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter( product => product.category_id === activeCategories)

            setFilteredProducts(newFilteredProducts)
        }
    }, [ activeCategories, products ])

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
            <ProductsContainer>
                { filteredProducts && filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product}/>
                ))}
            </ProductsContainer>
        </Container>
    )
}


Products.propTypes = {
    location: PropTypes.object
}

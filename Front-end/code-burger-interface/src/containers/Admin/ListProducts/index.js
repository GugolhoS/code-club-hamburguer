import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import paths from "../../../Constants/paths";
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency';
import { Container, Img, EditIcon } from './styles';

export function ListProducts(){
  const navigate = useNavigate()
    const [products, setProducts] = useState()
    
    useEffect(() => {
        async function LoadProducts(){
            const { data } = await api.get("products")
          
            setProducts(data)
        }
        
        LoadProducts()
    }, [])

    function isOffer(offerStatus){
        if(offerStatus){
            return <CheckBoxIcon style={{color: '#228B22'}}/>
        } 
        return <CheckBoxOutlineBlankIcon style={{color: '#CC1717'}} />
    }

    function editProduct(product){
      navigate(paths.EditProduct, { state: { product } })
    }

    return <Container>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell align='center'>Produto em Oferta</TableCell>
            <TableCell align='center'>Imagem do Produto</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell>{formatCurrency(product.price)}</TableCell>
              <TableCell align='center'>{isOffer(product.offer)}</TableCell>
              <TableCell align='center'><Img src={product.url} alt='imagem-produto' /></TableCell>
              <TableCell><EditIcon onClick={() => editProduct(product)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
}

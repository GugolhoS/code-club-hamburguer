
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from "react";

import api from '../../../services/api'
import formatDate from '../../../utils/formatDate';
import status from './order-status';
import Row from './Row'
import { Container, Menu, LinkMenu } from "./styles";

function Orders(){
  const [orders, setOrders ] = useState([])
  const [filteredOrders, setFilteredOrders ] = useState([])
  const [activeStatus, setActiveStatus ] = useState(1)
  const [rows, setRows ] = useState([])

  useEffect(() => {
    async function LoadOrders(){
        const { data } = await api.get("orders")

        setFilteredOrders(data)
        setOrders(data)
    }
    
    LoadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  } 

  useEffect(() => {
    const newFlow = filteredOrders.map(ord => createData(ord))
    setRows(newFlow)
  }, [filteredOrders])

  useEffect(() => {
    if(activeStatus === 1){
      setFilteredOrders(orders)
    } else {
      const statusIndex = status.findIndex( sts => sts.id === activeStatus)
      const newFilteredOrders = orders.filter( ord => ord.status === status[statusIndex].value)
      setFilteredOrders(newFilteredOrders)
    }
  }, [orders]) // ele que que atualize activestatus mas n precisa pois ele é atualizado no Row.js

  function handleStatus(status){
    setActiveStatus(status.id)
    if(status.id === 1){
      setFilteredOrders(orders)
    } else {
      setFilteredOrders(orders.filter( ord => ord.status === status.value))
    }
  }

  return(
    <Container>
      <Menu>
        {status && 
          status.map(status => (
          <LinkMenu key={status.id}
            onClick={() => handleStatus(status)}
            isActiveStatus={activeStatus === status.id}
          >{status.label}</LinkMenu>
        ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do Pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { rows.map((row) => (
              <Row key={row.orderId} row={row} setOrders={setOrders} orders={orders} />
            ))}
          </TableBody>
        </Table>
    </TableContainer>
    </Container>
  )
}

export default Orders
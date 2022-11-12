import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../Admin/AddProduct'
import EditProduct from '../Admin/EditProduct'
import CartSummary from '../MainPages/CartPage'
import Electricians from '../MainPages/Electrician'
import HomePage from '../MainPages/HomePage'

const AllRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/adminpage' element={<AddProduct/>}/>
        <Route path='/adminpage/editService' element={<EditProduct/>}/>
        <Route path='/mansalon' element={""}/>
        <Route path='/womansalon' element={""}/>
        <Route path='/electrician' element={<Electricians/>}/>
        <Route path='/plumber' element={""}/>
        <Route path='/cartpage' element={<CartSummary/>}/>
        <Route path='/paymentpage' element={""}/>
      </Routes>
  )
}

export default AllRoutes

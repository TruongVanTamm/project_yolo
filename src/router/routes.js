import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Products from '../pages/Products'
import SignUpPage from '../pages/SignUpPage'
import SignInPage from '../pages/SignInPage'
import { GlobalState } from '../GlobalState'
import NotFound from '../components/NotFound'
import OrderHistory from '../components/OrderHistory'
import OrderDetail from '../components/OrderDetail'
const RoutesWrap = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  return ( 
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/catalog/:id' exact  element={<Products></Products>}></Route>
          <Route path='/catalog' exact element={<Catalog></Catalog> }></Route>
          <Route path='/cart' exact element={<Cart></Cart>}></Route>
          <Route path='/history' exact element={isLogged ? <OrderHistory></OrderHistory>:<NotFound></NotFound>}></Route>
          <Route path='/history/:id' exact element={<OrderDetail></OrderDetail>}></Route>
          <Route path='/signup' exact element={isLogged ? <NotFound></NotFound>:<SignUpPage></SignUpPage>}></Route>
          <Route path='/signin' exact element={isLogged ? <NotFound></NotFound>:<SignInPage></SignInPage>}></Route>
        </Routes>
  )
}

export default RoutesWrap

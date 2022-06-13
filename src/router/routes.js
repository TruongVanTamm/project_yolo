import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Products from '../pages/Products'
import SignUpPage from '../pages/SignUpPage'
import SignInPage from '../pages/SignInPage'

const RoutesWrap = () => {
  return ( 
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/catalog/:slug' element={<Products></Products>}></Route>
          <Route path='/catalog' element={<Catalog></Catalog>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
          <Route path='/signin' element={<SignInPage></SignInPage>}></Route>
        </Routes>
  )
}

export default RoutesWrap

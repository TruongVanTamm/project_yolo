import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Products from '../pages/Products'
const RoutesWrap = () => {
  return ( 
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/catalog/:slug' element={<Products></Products>}></Route>
          <Route path='/catalog' element={<Catalog></Catalog>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
  )
}

export default RoutesWrap

import React, { useEffect, useState } from 'react'
import { PlanesPP } from '../../components/PlanesPP/PlanesPP'
import ImagenPrincipal from '../../components/ImagenPrincipal/ImagenPrincipal';
import "../Home/Home.css"
import ProductosP from '../../components/ProductosP/ProductosP';
import Clima from '../../components/Clima/Clima';

const Home = ({setUSer}) => {
  
  return (
    <div className='d-flex flex-column color'>
      <ImagenPrincipal/>
      <Clima/>
      <PlanesPP/>
      <ProductosP/>
    </div>
  )
}

export default Home
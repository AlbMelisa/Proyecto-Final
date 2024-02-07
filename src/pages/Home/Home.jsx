import React, { useEffect, useState } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { CardProducto } from '../../components/CardProducto/CardProducto'
import { PlanesPP } from '../../components/PlanesPP/PlanesPP'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import ImagenPrincipal from '../../components/ImagenPrincipal/ImagenPrincipal';
import Clima from '../../components/clima/clima';
import "../Home/Home.css"
import FooterComponent from '../../components/Footer/FooterComponent';
import ProductosP from '../../components/ProductosP/ProductosP';
import Grilla from '../../components/Grilla/Grilla';

const Home = ({setUSer}) => {
  
  return (
    <div className=' color'>
      <ImagenPrincipal/>
      <Clima/>
      <PlanesPP/>
      <ProductosP/>
    </div>
  )
}

export default Home
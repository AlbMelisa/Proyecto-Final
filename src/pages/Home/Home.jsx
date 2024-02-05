import React from 'react'
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
const Home = () => {
  return (
    <div className='d-flex flex-column color'>
      <NavbarComponent/>
      <ImagenPrincipal/>
      <Clima/>
      <PlanesPP/>
      <Row className='d-flex justify-content-center g-0 m-3'>
        <Col className='d-flex justify-content-center g-0' >
          <CardProducto/>
        </Col>
        <Col className='d-flex justify-content-center g-0' >
          <CardProducto/>
        </Col>
        <Col className='d-flex justify-content-center g-0' >
          <CardProducto/>
        </Col>
        <Col className='d-flex justify-content-center g-0' >
          <CardProducto/>
        </Col>
    </Row>
      <FooterComponent/>
    </div>
  )
}

export default Home
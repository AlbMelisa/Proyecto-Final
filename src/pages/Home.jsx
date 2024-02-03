import React from 'react'
import NavbarComponent from '../components/NavbarComponent/NavbarComponent'
import { CardProducto } from '../components/CardProducto/CardProducto'
import { PlanesPP } from '../components/PlanesPP/PlanesPP'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import ImagenPrincipal from '../components/ImagenPrincipal/ImagenPrincipal';
import Clima from '../components/clima/clima';
import "../pages/Home.css"
const Home = () => {
  return (
    <div className='color'>
      <NavbarComponent/>
      <ImagenPrincipal/>
      <Clima/>
      <PlanesPP/>
      <div>
        <h1 className='m-2 text-center text-dark'>CONSIGUE NUESTROS PRODUCTOS</h1>
        <Row className='g-0' >
          <Col className='m-2 d-flex justify-content-center'><CardProducto/></Col>
          <Col className='m-2 d-flex justify-content-center'><CardProducto image={'https://shop.gymvirtual.com/wp-content/uploads/2020/05/botellines-amarillo.png'} text={'ekmrekm'}/></Col>
          <Col className='m-2 d-flex justify-content-center '>
            <CardProducto/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
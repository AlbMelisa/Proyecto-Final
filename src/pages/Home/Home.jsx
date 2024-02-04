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
const Home = () => {
  return (
    <div className='color'>
      <NavbarComponent/>
      <ImagenPrincipal/>
      <Clima/>
      <PlanesPP/>
      <div className='mt-3'>
        <h2 className='mt-2 text-center text-dark'>CONSIGUE NUESTROS PRODUCTOS</h2>
        <Row className='g-0' >
          <Col className='m-2 d-flex justify-content-center'><CardProducto/></Col>
          <Col className='m-2 d-flex justify-content-center'><CardProducto image={'https://shop.gymvirtual.com/wp-content/uploads/2020/05/botellines-amarillo.png'} text={'ekmrekm'}/></Col>
          <Col className='m-2 d-flex justify-content-center '>
            <CardProducto/>
          </Col>
          <Col className='m-2 d-flex justify-content-center'>
            <CardProducto />
          </Col>
        </Row>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default Home
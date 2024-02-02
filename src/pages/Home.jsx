import React from 'react'
import NavbarComponent from '../components/NavbarComponent/NavbarComponent'
import { CardProducto } from '../components/CardProducto/CardProducto'
import { PlanesPP } from '../components/PlanesPP/PlanesPP'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
const Home = () => {
  return (
    <>
      <NavbarComponent/>
      <PlanesPP/>
      <Container>
        <Row>
          <Col className='m-2 d-flex justify-content-center'><CardProducto/></Col>
          <Col className='m-2 d-flex justify-content-center'><CardProducto/></Col>
          <Col className='m-2 d-flex justify-content-center'><CardProducto/></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
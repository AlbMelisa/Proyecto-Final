import React from 'react'
import { CardView } from '../CardView/CardView'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';


export const PlanesPP = () => {
  return (
    <div className='contenedor m-0 p-0 d-flex justify-content-center align-items-center'>
      <Row>
        <Col sm={12} md={4} >
          <CardView/>
        </Col>
        <Col sm={12} md={4} >
          <CardView/>
        </Col>
        <Col sm={12} md={4} >
          <CardView/>        
        </Col>
      </Row>
    </div>
  )
}

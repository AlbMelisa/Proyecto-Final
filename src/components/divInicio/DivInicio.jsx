import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../divInicio/DivInicio.css'
import { Link } from 'react-router-dom'

const DivInicio = () => {
  return (
    <Row className='g-0 divInicio' >
      <Col className='d-flex justify-content-center align-items-center'>
        <Link to='/crudUsuarios' className='text-decoration-none text-dark' >Usuarios</Link>
      </Col>
      <Col className='d-flex justify-content-center align-items-center'>
        <Link to='/crudClases' className='text-decoration-none text-dark'>Clases</Link>
      </Col>
      <Col className='d-flex justify-content-center align-items-center'>
        <Link to='/crudPlanes' className='text-decoration-none text-dark'>Planes</Link>
      </Col>
    </Row>
  )
}

export default DivInicio
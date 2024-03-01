import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap


const CardComponent = ({title, image}) => {

  return (
  <>
    <Col  className='card-style p-0' >
      <img alt="tarjetas" src={image} width='180px' />
      <h4>{title}</h4>
    </Col>
  </>
  )
}

export default CardComponent;
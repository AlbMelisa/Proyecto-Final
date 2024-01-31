import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap


const CardComponent = ({title, imageSource}) => {

  return (
  <>
    <Col  className='card-style' >
      <img alt="tarjetas" src={imageSource} width='110px' />
      <h4>{title}</h4>
    </Col>
  </>
  )
}

export default CardComponent;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import './CardComponent.css';
import image3 from  '../../images/3.jpg';
import CardComponent from './CardComponent';
 



const cards = [
  {
    id: 1,
    title: 'Melisa ',
    image: image3
  },
  {
    id: 2,
    title: ' Camila',
    image: image3
  },  {
    id: 3,
    title: 'Rafael ',
    image: image3
  },
  
  

]


const CardsComponent = () => {

  
  return (
    <>
   <Container className='container-cards' >
  <Row className='d-flex justify-content-center '>
    {cards.map(card => (
      <CardComponent key={card.id} title={card.title} imageSource={card.image} />
    ))}
  </Row>
</Container>

    
   
    </>
  
  )
}

export default CardsComponent;
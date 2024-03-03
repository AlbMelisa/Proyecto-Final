import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import './CardComponent.css';

import i1 from  '../../images/avatarml.png';
import i2 from  '../../images/avatarc.png';
import i3 from  '../../images/avatarf.png';

import CardComponent from './CardComponent';
 



const cards = [
  {
    id: 1,
    title: 'Melisa ',
    image: i1
  },
  {
    id: 2,
    title: ' Camila',
    image: i2
  },  {
    id: 3,
    title: 'Rafael ',
    image: i3
  },

]


const CardsComponent = () => {

  
  return (
    <>
   <Container className= 'd-flex justify-content-center' >
  <Row className='d-flex justify-content-center '>
    {cards.map(card => (
      <CardComponent key={card.id} title={card.title} imageSource={card.image}/>
    ))}
  </Row>
</Container>

    
   
    </>
  
  )
}

export default CardsComponent;
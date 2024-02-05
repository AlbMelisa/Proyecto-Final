import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CardProducto/CardProducto.css'
import {useEffect, useState} from 'react'



export const CardProducto = (props) => {

  return (
    
    <Card className='cardProducto'>
      <Card.Body>
        <Card.Title className='text-light'>{props.text}</Card.Title>
        
      </Card.Body>
      <Card.Img variant="top" src={props.image} className='imgProducto'/>
    </Card>
  )
}

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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

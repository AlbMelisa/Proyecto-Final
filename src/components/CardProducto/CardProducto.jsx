import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const CardProducto = () => {
  return (
    
    <Card className='cardProducto'>
      <Card.Body>
        <Card.Title className='text-light'>BOTELLA ECO-FRIENDLY AMARILLO</Card.Title>
        
      </Card.Body>
      <Card.Img variant="top" src="https://shop.gymvirtual.com/wp-content/uploads/2020/05/botellines-amarillo.png" className='imgProducto'/>
    </Card>
  )
}

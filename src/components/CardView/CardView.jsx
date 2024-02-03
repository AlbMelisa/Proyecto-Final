import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const CardView = (props) => {
  return (
    <Container className='p-0 d-flex justify-content-center g-0'>
      <Card className='m-3 cardView d-flex flex-column p-0 g-0'>
        <Card.Body className='text-center flex-grow-1'>
          <Card.Title className='fontView fw-bold'> Plan {props.plan} <br/> {props.nombre}</Card.Title>
          <Card.Text className='text-light '>
          {props.descripcion}
          </Card.Text>
        </Card.Body>
        <div className="text-center">
          <Button className='buttonView mb-3'><Link to='/PlanUno' className='text-decoration-none'>ACCEDER AHORA</Link></Button>
        </div>
      </Card>

    </Container>
  )
}

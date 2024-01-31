import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardView = () => {
  return (
      <Card className='m-3 cardView d-flex flex-column'>
        <Card.Body className='text-center flex-grow-1'>
          <Card.Title className='fontView fw-bold'> Plan #1 <br/> Musculación</Card.Title>
          <Card.Text className='text-light m-3'>
              Ajusta tu porcentaje de grasa y composición corporal y fortalece tu musculatura.
          </Card.Text>
        </Card.Body>
        <div className="text-center">
          <Button className='buttonView mb-3'>ACCEDER AHORA</Button>
        </div>
      </Card>
  )
}

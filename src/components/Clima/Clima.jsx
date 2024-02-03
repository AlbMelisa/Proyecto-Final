import '../Clima/clima.css'
import { Col, Container, Row } from 'react-bootstrap'
import Swal from 'sweetalert2';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f35fbee7016ebf01be550a19df80e230';
const city = 'tucuman';

const apiUrlWithParams = `${apiUrl}?q=${city}&lat=-26.80&lon=-65.21&appid=${apiKey}`;

const clima = fetch(apiUrlWithParams)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Aquí puedes manejar los datos de la respuesta de la API
  })
  .catch(error => {
    Swal.fire({
      title: "¡Hubo un error Inesperado!",
      icon: "error"
    });
  });

const Clima = () => {
  return (
    <Container className=' m-0'>
      <Row className='p-0'>
        <Col>
          <h1 className='m-3 text-center text-dark'>Horarios</h1>
          <Row className='text-center g-0 p-0'>
            <Col className='text-dark'>
              <h2>LUN-VIE</h2>
              <h3>8:00 a 23:00</h3>
            </Col>
            <Col className='text-dark'>
              <h2>SÁBADOS</h2>
              <h3>9:00 a 18:00</h3>
            </Col>
          </Row>
        </Col>
        <Col className='p-0 text-dark'>
          <h1>horarios</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Clima
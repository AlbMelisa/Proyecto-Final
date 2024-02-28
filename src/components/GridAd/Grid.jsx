import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  './Grid.css';
import { Link } from 'react-router-dom';

function Grid() {
  return (
    <Container
      className="my-container"  >
      <Row>
      <Col className='my-col'><Link className='link-grid'>User</Link></Col>
        <Col className='my-col'><Link className='link-grid'>Clases</Link></Col>
        <Col className='my-col'><Link className='link-grid'>Plan</Link></Col>
      </Row>
    </Container>
  );
}

export default Grid;
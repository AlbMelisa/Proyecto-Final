import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "../NavbarComponent/NavbarComponent.css"



const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbarStyle ">
      <Container fluid>
        <Navbar.Brand href="#">
        <Link to='/Home'> <Image src="https://trello.com/1/cards/65a2081264be9affda46ff7d/attachments/65a208ee049d921f3d252e18/previews/65a208ef049d921f3d252e3e/download/LogoGymageLEtras.png" className='gymmageStyle  mt-4'/> </Link>
        </Navbar.Brand>
        <Link to='/Home'><Image src="https://trello.com/1/cards/65a2081264be9affda46ff7d/attachments/65a208ebc95461db4f8ff4d7/previews/65a208ebc95461db4f8ff669/download/LogoGymage.png1x180" className='logoStyle mt-3 '/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/PlanUno" className=' mx-2 text-light fs-5'>Clases</Nav.Link>
            <Nav.Link href="/Contacto" className='text-light mx-2 fs-5'>Contacto</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
          <Button className='mt-3 mx-1 buttonStyle'><Link to='/login'>Iniciar Sesion</Link></Button> 
          </Form>
          <Form className="d-flex">
          <Button className='mt-3 mx-1 buttonStyle'><Link to='/Registro'>Registrarse</Link></Button> 
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  
  )
}

export default NavbarComponent
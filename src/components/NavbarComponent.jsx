import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbarStyle p-2">
      <Container >
        <div >
          <Image src="https://trello.com/1/cards/65a2081264be9affda46ff7d/attachments/65a208ee049d921f3d252e18/previews/65a208ef049d921f3d252e3e/download/LogoGymageLEtras.png" className='gymmageStyle  mt-4'/> 
        </div>
        <div >
          <Image src="https://trello.com/1/cards/65a2081264be9affda46ff7d/attachments/65a208ebc95461db4f8ff4d7/previews/65a208ebc95461db4f8ff669/download/LogoGymage.png1x180" className='logoStyle mt-3 '/>
        </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Form >
              <Button className='mt-3 mx-2 buttonStyle'>Login</Button>
              <Button className='mt-3 mx-2 buttonStyle'>Login</Button>
              <Button className='mt-3 mx-2 buttonStyle'>Login</Button>
                </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  
  )
}

export default NavbarComponent
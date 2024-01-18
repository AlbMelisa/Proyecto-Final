import {Container,Row,Col,Button, Form, FormControl, Image, Card} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
const CardPlan = () => {
  return (
    <div >
      <div className='d-flex justify-content-center m-2'>
        <h3 className='letterType text-center text-light'>Completa el siguiente cuestionario y nos pondremos en contacto con vos.</h3>
      </div>
      <div className='d-flex justify-content-center '>
        <Card className='cardPlan col-xl-8 col-md-9 col-10  text-light border border-0'> 
          <Row  className=" m-0">
            <Col md="auto" className='p-0 m-0'>
              <div className='d-flex justify-content-center  m-0'>
              <Image src='https://trello.com/1/cards/65a2081e1c84a98d8542b641/attachments/65a210edb576adc057ef1a80/previews/65a210eeb576adc057ef1ae5/download/imgProyecto.png' className='imagePlan  m-2 m-md-0 m-xl-0'/>
              </div>
            </Col>
            <Col className='mb-3 p-0'>
              <Row className='m-0'>
                <Col >
                  <h1 className='m-2 fst-italic'>PLAN #1</h1>
                </Col>
                <Col className='m-0 p-0' >
                  <div className='d-flex justify-content-end p-0 m-0'>
                  <Image src="https://trello.com/1/cards/65a2081264be9affda46ff7d/attachments/65a208ee049d921f3d252e18/previews/65a208ef049d921f3d252e3e/download/LogoGymageLEtras.png" className='gymmageStyle'/> 
                  </div>
                </Col>
              </Row>
            <Row className='m-1'> 
              <Col >
                <Form>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <FormControl className='rounded-pill colorForm' 
                    type='text' 
                    maxLength={40} 
                    minLength={3}/>
                  </Form.Group>
                </Form>
              </Col>
              <Col >
                <Form>
                  <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <FormControl className='rounded-pill colorForm'
                     type='text'
                     maxLength={40}
                     minLength={3}/>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className='m-1'>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Telefono</Form.Label>
                    <FormControl className='rounded-pill colorForm' 
                    type='text'
                    maxLength={40}
                    minLength={3}/>
                  </Form.Group>
                </Form>
              </Col>
              <Col >
                <Form>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <FormControl className='rounded-pill colorForm' 
                    type='text'
                    maxLength={60}
                    minLength={3}/>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className='m-1'>
              <Form >
                <Form.Group >
                  <Form.Label>¿Cómo nos conociste?</Form.Label>
                    <FormControl className='rounded-pill colorForm'
                     type='text'
                     maxLength={60}
                     />
                </Form.Group>
              </Form>
            </Row>   
            <Row className='m-1'>
              <Form>
                <Form.Group>
                  <Form.Label>¿Estás asistiendo a algún gimnasio?</Form.Label>
                    <FormControl className='rounded-pill colorForm' 
                    type='text'
                    maxLength={60}
                    />
                </Form.Group>
              </Form>
            </Row>
            <Row className='m-1'>
              <Form>
                <Form.Group>
                  <Form.Label>¿Cómo te encuentras Fisicamente?</Form.Label>
                    <FormControl className='rounded-pill colorForm' 
                    type='text'
                    maxLength={60}/>
                </Form.Group>
              </Form>
            </Row>
            <div className='d-flex justify-content-end'>
              <Button className='mt-3 mx-2 buttonStyle'>Enviar</Button>
            </div>
            </Col>
          </Row>
        </Card>  
      </div>
    </div>
   )
}

export default CardPlan
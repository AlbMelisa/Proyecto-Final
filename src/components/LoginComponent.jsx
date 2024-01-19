import React from 'react'
import { Container , Row , Col , Form , Button } from 'react-bootstrap';

const LoginComponent = () => {
  return (
    <>
    <Container>
        <Row>
            <Col>
                <Form>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type='email'
                        placeholder='Ingrese su email..'
                        />
                        <Form.Label>contraseña</Form.Label>
                        <Form.Control
                        type='password'
                        placeholder='Ingrese su contraseña..'
                        />
                    </Form.Group>
                    <Button type='submit'>Logeate!</Button>
                </Form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default LoginComponent;
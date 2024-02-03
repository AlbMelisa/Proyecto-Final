import React from 'react'
import { useForm } from 'react-hook-form'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const RegisterComponents = () => {

 const {register, handleSubmit, formState: {errors}, reset } =  useForm();

 const onSubmit = (data) =>{
  console.log(data)
  // EN VEZ DEL CONSOLE LOG TENGO QUE HACER EL FETCH Y MANDARLO A LA BASE DE DATOS
 }


  return (
    <>
        <Container>
        <Row>
            <Col>
                <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <Form.Group>
                        <Form.Label>Primer Nombre</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Ingrese su Primer nombre..'
                        {...register('firstName', {required: 'Este campo es obligatorio'})}
                        isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.firstName?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>    
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                        type='text'
                        placeholder='Ingrese su apellido..'
                        {...register('lastName', {required: 'Este campo es obligatorio'})}
                        isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.lastName?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>    
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type='email'
                        placeholder='Ingrese su Email..'
                        {...register('email', {required: 'Este campo es obligatorio'})}
                        isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Nueva Contraseña</Form.Label>
                        <Form.Control
                        type='password'
                        placeholder='Ingrese su contraseña..'
                        {...register('password', {required: 'Este campo es obligatorio'})}
                        isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.password?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Reingrese Contraseña</Form.Label>
                        <Form.Control
                        type='password'
                        placeholder='Ingrese de nuevo su contraseña..'
                        {...register('password', {required: 'Este campo es obligatorio'})}
                        isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.password?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Button type='submit'>Registrate!</Button>
                </Form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default RegisterComponents
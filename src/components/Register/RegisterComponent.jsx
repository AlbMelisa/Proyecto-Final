import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {Container, Row,Col, Form,Button,Card, Image,} from "react-bootstrap";
import "../Register/RegisterComponent.css";
import logo from "../../images/LogoGymAgeCompleto.png";
import { API_URL } from "../../utils/constant.js";

import Swal from "sweetalert2";

const RegisterComponents = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm();

  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const onSubmit = async (data) => {
    try {
        const fullData = {...data, role:'user'}
        const response = await fetch(`${API_URL}user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(fullData),
      });
      reset();

      Swal.fire({
        title: "Felicidades!",
        text: "Su correo fue enviado con exito.",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "¡Hubo un error Inesperado!",
        icon: "error",
      });
    }
  };
  const handleAceptoTerminosChange = () => {
    setAceptoTerminos(!aceptoTerminos);
  };

  return (
    <div className="d-flex justify-content-center m-3">
      <Card className="styleCard">
        <Row>
          <Col className="d-flex justify-content-center flex-column">
            <h1 className="text-center text-light">REGISTRATE</h1>
            <div className="d-flex justify-content-center">
              <Image src={logo} className="p-3 img  " />
            </div>
          </Col>
          <Col className="m-2">
            <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
              <Form.Group className="mt-2">
                <Form.Label className="text-light">Nombre</Form.Label>
                <Form.Control
                  className="colorForm"
                  type="text"
                  placeholder="Ingrese su nombre.."
                  minLength={3}
                  maxLength={50}
                  {...register("nombre", {
                    required: "Este campo es obligatorio",
                  })}
                  isInvalid={!!errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label className="text-light">Apellido</Form.Label>
                <Form.Control
                  className="colorForm"
                  type="text"
                  placeholder="Ingrese su apellido.."
                  minLength={3}
                  maxLength={60}
                  {...register("apellido", {
                    required: "Este campo es obligatorio",
                  })}
                  isInvalid={!!errors.apellido}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  className="colorForm"
                  type="email"
                  placeholder="Ingrese su email.."
                  minLength={12}
                  maxLength={46}
                  {...register("email", {
                    required: "Este campo es obligatorio",
                  })}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label className="text-light">Contraseña</Form.Label>
                <Form.Control
                  className="colorForm"
                  type="password"
                  placeholder="Ingrese su contraseña.."
                  minLength={8}
                  maxLength={30}
                  {...register("clave", {
                    required: "Este campo es obligatorio",
                  })}
                  isInvalid={!!errors.clave}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form className="d-flex justify-content-center m-2">
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Acepto términos y condiciones"
                  className="text-light text-center mt-2"
                  checked={aceptoTerminos}
                  onChange={handleAceptoTerminosChange}
                />
              </Form>
              <div className="d-flex  flex-column m-2 ">
                <Button className=" buttonStyle text-center" type="submit">
                  Registrarse
                </Button>
                <h4 className="text-light text-center">¿Ya tenes cuenta?</h4>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default RegisterComponents;

import React from "react";

import "./SobreNosotros.css";
import CardComponent from "../../components/Card/CardComponent";
import { Col, Row } from "react-bootstrap";

const SobreNosotros = () => {
  
  return (
    <>
      <div className="container-all">
        <h1 className="frase">
          "El trabajo en equipo es la clave para desbloquear el potencial
          infinito de nuestra creatividad y habilidades"
        </h1>
        <Row className=" g-0">
          <Col className='d-flex justify-content-center' >
            <CardComponent title={'Camila Brahim'} />
          </Col>
          <Col className='d-flex justify-content-center' >
            <CardComponent title={'Rafael Ortega'}/>
          </Col>
          <Col className='d-flex justify-content-center' >
            <CardComponent title={'Melisa Albornoz'}/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SobreNosotros;

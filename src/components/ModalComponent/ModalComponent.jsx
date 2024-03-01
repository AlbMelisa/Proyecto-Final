import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import { API_URL } from "../../utils/constant.js";
import { Col, Row } from "react-bootstrap";

const ModalComponent = ({ show, handleClose, selectedUser, token, nombre }) => {
  const [userData, setUserData] = useState({});
  const [originalUserData, setOriginalUserData] = useState({});
  
  let url = `${API_URL}user`;

  if (nombre === "clases") {
    url = `${API_URL}clase`;
  }
  if (nombre === "planes") {
    url = `${API_URL}plan`;
  }
  // CRUD - UPDATE - DELETE
  const updateUser = async (userData) => {
    console.log('El dato es:', userData, url);
    if(nombre === "clases"){
      url = `${API_URL}clase/modificar`
    }
    try {
      const response = await fetch(`${url}/${userData._id}`, {
        method: "PUT", // Utiliza el método PUT para actualizar los datos
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(userData), // Convierte userData a formato JSON antes de enviarlo
      });

      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        return;
      }
      console.log("Usuario actualizado exitosamente");
        window.location.reload();
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };
  const deleteUser = async (id) => {
    try {
      swal({
        title: "¿Estas seguro?",
        text: "No podrás volver atrás una vez que selecciones 'Ok'.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          // Si el usuario confirma la eliminación, se realiza la solicitud DELETE
          const response = await fetch(`${url}/${userData._id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
            credentials: "include",
          });

          if (!response.ok) {
            const data = await response.json();
            console.log(data);
            return;
          }

          console.log("Usuario eliminado exitosamente");
          swal("El usuario fue eliminado", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userData);
    handleClose();
  };

  const handleCancel = () => {
    setUserData(originalUserData); // Restaura los datos originales al cancelar
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUserData(selectedUser); // Actualiza userData con el nuevo selectedUser
    setOriginalUserData(selectedUser); // Guarda una copia de seguridad de los datos originales
  }, [selectedUser]); // Se ejecuta cuando selectedUser cambie

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="d-flex justify-content-center align-items-center "
    >
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Usuario</Modal.Title>
      </Modal.Header>
        {
          nombre == 'usuarios' && (
          <Modal.Body>
              <Form.Group >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={userData?.nombre || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="apellido"
                  value={userData?.apellido || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userData?.email || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="role"
                  value={userData?.role || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Modal.Body>
          )
        }
        {
          nombre=='clases' && (
            <Modal.Body>
              <Form.Group controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={userData?.nombre || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicApellido">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  name="descripcion"
                  value={userData?.descripcion || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicProfesor">
                <Form.Label>Profesor</Form.Label>
                <Form.Control
                  type="text"
                  name="profesor"
                  value={userData?.profesor || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicFecha">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                      type="text"
                      name="fecha"
                      value={userData?.fecha || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicHora">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control
                      type="number"
                      name="hora"
                      value={userData?.hora || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>

                </Col>
              </Row>
              <Form.Group>
              <Form.Label>Alumnos</Form.Label>
              <Form.Control
                type="text"
                name="alumnos"
                value={userData?.alumnos && Array.isArray(userData.alumnos) ? userData.alumnos.map(alumno => `${alumno.nombre}`).join(', ') : ''}
                onChange={handleChange}
              />
            </Form.Group>
            </Modal.Body>
          )
        }
        {
          nombre == 'planes' && (
            <Modal.Body>
               <Form.Group >
                <Form.Label>Plan</Form.Label>
                <Form.Control
                  type="text"
                  name="plan"
                  value={userData?.plan || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      value={userData?.nombre || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      name="apellido"
                      value={userData?.apellido || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userData?.email || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>¿Cómo nos conociste?</Form.Label>
                <Form.Control
                  type="text"
                  name="infoUno"
                  value={userData?.infoUno || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>¿Estas asistiendo a algun gimnasio?</Form.Label>
                <Form.Control
                  type="text"
                  name="infoDos"
                  value={userData?.infoDos || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group >
                <Form.Label>¿Cómo te encuentras fisicamente?</Form.Label>
                <Form.Control
                  type="text"
                  name="infoTres"
                  value={userData?.infoTres || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Modal.Body>
          )
        }
      <Modal.Footer className="d-flex ">
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Guardar
        </Button>
        <Button variant="danger" onClick={() => deleteUser(selectedUser._id)}>
          Eliminar
        </Button>
        <Button variant="secondary" onClick={handleCancel}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;

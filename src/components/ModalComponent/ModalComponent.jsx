import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import swal from "sweetalert";

const ModalComponent = ({ show, handleClose, selectedUser,token }) => {
  const [userData, setUserData] = useState({});
  const [originalUserData, setOriginalUserData] = useState({});

  // CRUD - UPDATE - DELETE
  const updateUser = async (userData) => {
    console.log(userData)
    try {
      const response = await fetch(`http://localhost:4000/user/${userData._id}`, {
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
          const response = await fetch(`http://localhost:4000/user/${id}`, {
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
          // Mostrar un mensaje de éxito después de eliminar el usuario
          swal("El usuario no fue eliminado", {
            icon: "success",
          });
        } else {
          // Si el usuario cancela la eliminación, se muestra un mensaje
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
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setUserData(selectedUser); // Actualiza userData con el nuevo selectedUser
    setOriginalUserData(selectedUser); // Guarda una copia de seguridad de los datos originales
  }, [selectedUser]); // Se ejecuta cuando selectedUser cambie


  return (
    <Modal show={show} onHide={handleClose} className='d-flex justify-content-center align-items-center'>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={userData?.nombre || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={userData?.apellido || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={userData?.email || ''}
              onChange={handleChange}
            />
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit} >
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
  )
}

export default ModalComponent
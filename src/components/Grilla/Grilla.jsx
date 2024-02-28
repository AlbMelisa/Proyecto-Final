import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Table,
  Modal,
  Form,
  Row,
} from "react-bootstrap";
import ModalComponent from "../ModalComponent/ModalComponent";

const Grilla = ({ setUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const token = localStorage.getItem("token");
  
  const handleRowClick = (User) => {
    setSelectedUser(User);
    setShowModal(true); // Abrir el modal cuando se hace clic en una fila
  };
  
  const getUser = async () => {
    const response = await fetch("http://localhost:4000/user", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include",
    });
  
    if (response.status !== 200) {
      const data = await response.json();
      console.log(data);
      localStorage.clear();
      setUser({
        token: null,
        userInfo: null,
        isLogged: false,
  
      });
      return;
    }
  
    if (response.status === 200) {
      const data = await response.json();
      setUserList(data);
      console.log(data);
    }
  };

  
  return (
    <>
      <h1>BIENVENIDOS AL PANEL DE ADMINISTRACIÓN</h1>
      <h2 className="text-center">USUARIOS</h2>
      <div>
        <Table striped bordered hover variant="dark" className="p-2">
          <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Apellido</th>
              <th className="text-center">Email</th>
              <th className="text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((User) => (
              <tr key={User._id} onClick={() => handleRowClick(User)}>
                <td className="text-center">{User.nombre}</td>
                <td className="text-center">{User.apellido}</td>
                <td className="text-center">{User.email}</td>
                <td className="text-center">{User.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Button className="m-2 text-center" onClick={() => getUser()}>
        Obtener Usuarios
      </Button>
  
  
      <ModalComponent
        show={showModal}
        handleClose={() => setShowModal(false)}
        selectedUser={selectedUser}
        token={token}
      />      
    </>
  );

}

export default Grilla
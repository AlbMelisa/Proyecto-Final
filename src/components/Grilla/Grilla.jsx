import { useEffect, useState } from "react"
import { Button, Card, Col, Table } from "react-bootstrap"

const Grilla = ({setUser}) => {
  
  const [userList, setUserList] = useState([])
  const token = localStorage.getItem('token');

  const getUser = async () => {
  
    const response = await fetch('http://localhost:4000/user', {
      method: 'GET',
      headers: {'Authorization': `Bearer ${token}`},
      credentials: 'include'
    })

    if(response.status !== 200){
      const data = await response.json()
      console.log(data)
      localStorage.clear()
      setUser({
        token: null,
        userInfo: null,
        isLogged: false
      })
      return
    }

    if(response.status === 200){
      const data = await response.json()
      setUserList(data)
      console.log(data)
    }
  }

  const deleteUser = async (userId) => {
    try {
      const response = await fetch('http://localhost:4000/user', {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
        credentials: 'include'
      });

      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        return;
      }

      setUserList(prevList => prevList.filter(user => user._id !== userId));
      console.log('Usuario eliminado exitosamente');
    } catch (error) {
      console.error('No se puso eliminar el usuario(front):', error);
    }
  };

  return (
    <>
     <h1>BIENVENIDOS AL PANEL DE ADMINISTRACION</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">NOMBRE</th>
            <th className="text-center">APELLIDO</th>
            <th className="text-center">MAIL</th>
            <th className="text-center">ROLE</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(element => (
            <tr key={element._id}>
              <td>{element.nombre}</td>
              <td>{element.apellido}</td>
              <td>{element.email}</td>
              <td>{element.role}</td>
              <td>{/* Agrega la lógica para la actualización aquí */}</td>
              <td>
                <Button variant="danger" onClick={() => deleteUser(element._id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className='m-2' onClick={() => getUser()}>Obtener Usuarios</Button>
    </>
  )
}



export default Grilla
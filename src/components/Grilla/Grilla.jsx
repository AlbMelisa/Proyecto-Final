import { useEffect, useState } from "react"
import { Card, Col, Table } from "react-bootstrap"

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
      const response = await fetch(`http://localhost:4000/user/${userId}`, {
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
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
     <ul>
        {userList.map(element => (
          <li key={element._id}>
            {element.nombre}
            <button onClick={() => deleteUser(element._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => getUser()}>Obtener Usuarios</button>
    </>
  )
}



export default Grilla
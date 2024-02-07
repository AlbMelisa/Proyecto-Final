import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

const Grilla = () => {
  const [user,setUSer] = useState([])

    const getProductos = async() => {
      try {
        const response = await fetch('',{
          method: 'GET',
          headers: { "Content-Type": "application/json" },
          credentials: 'include' // Corrección aquí
        })
        if(response.status === 200){
          const data = await response.json()
          setUSer(data)
          console.log(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
  useEffect(()=>{
    getProductos()
  },[])
  
  return (
    <>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Plan</th>
            </tr>
          </thead>
          {user.map(User => (
            <tbody>
              <td></td>
              <td></td>
            </tbody>
        ))}
        </Table>
      </div>
    </>
  )
}

export default Grilla
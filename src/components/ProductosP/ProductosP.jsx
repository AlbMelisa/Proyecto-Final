import Row from 'react-bootstrap/Col'
import Col from 'react-bootstrap/Col'
import { CardProducto } from '../CardProducto/CardProducto'
import {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'

const ProductosP = () => {
  const [productos,setProductos] = useState({})

  const getProductos = async () => {
    try {
      const response = await fetch('http://localhost:4000/productos',{
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        credentials:i= 'include'
      })
     if(response.status !== 200){
      const data = await response.json()
      setProductos(data)
      localStorage.clear()
      setUser({
        token: null,
        userInfo: null,
        isLogged:false
      })
      return
     }
     if(response.status === 200){
      const data = await response.json()
      setProductos(data)
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
    </>
    
  )
}

export default ProductosP
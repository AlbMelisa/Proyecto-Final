import React, { useEffect, useState } from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { CardProducto } from '../../components/CardProducto/CardProducto'
import { PlanesPP } from '../../components/PlanesPP/PlanesPP'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import ImagenPrincipal from '../../components/ImagenPrincipal/ImagenPrincipal';
import Clima from '../../components/clima/clima';
import "../Home/Home.css"
import FooterComponent from '../../components/Footer/FooterComponent';
import ProductosP from '../../components/ProductosP/ProductosP';
import Grilla from '../../components/Grilla/Grilla';

const Home = () => {
  const [productos,setProductos] = useState([])

    const getProductos = async() => {
      try {
        const response = await fetch('http://localhost:4000/productos',{
          method: 'GET',
          headers: { "Content-Type": "application/json" },
          credentials: 'include' // Corrección aquí
        })
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
    <div className='d-flex flex-column color'>
      <ImagenPrincipal/>
      <Clima/>
      <PlanesPP/>
      <Row className='d-flex justify-content-center g-0 m-3'>
        {productos.map(producto => (
          <Col key={producto._id} xs={12} sm={6} md={6} lg={3} className='d-flex justify-content-center g-0'>
            <CardProducto nombre={producto.nombre} image={producto.imagen} precio={producto.precio} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
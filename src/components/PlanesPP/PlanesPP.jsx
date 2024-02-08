import React from 'react'
import { CardView } from '../CardView/CardView'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../PlanesPP/PlanesPP.css'

export const PlanesPP = () => {
  return (
    
    <Row className='g-0 back' >
      <Col className='m-2 d-flex justify-content-center'>
        <CardView plan={'I'} nombre={'Musculación'}descripcion={'Ajusta tu porcentaje de grasa y composición corporal y fortalece tu musculatura.'} />
      </Col>
     <Col className='m-2 d-flex justify-content-center'>
        <CardView plan={'II'} nombre={'Clases'}descripcion={'Mantén un estilo de vida saludable junto a nuestras clases para mantener tu peso ideal'}/>
      </Col>
      <Col className='m-2 d-flex justify-content-center '>
<<<<<<< HEAD
        <CardView plan={'III'} nombre={'Full'}descripcion={'Cambia tu estilo de vida junto a nuestras clases y nuestro salon de musculación.'}/>      
=======
        <CardView plan={'3'} nombre={'Full'} descripcion={'Cambia tu estilo de vida junto a nuestras clases y nuestro salon de musculación.'}/>      
>>>>>>> 63df117113dadad405c4047b868ddc69068b66f1
      </Col>
  </Row>

    
  )
}

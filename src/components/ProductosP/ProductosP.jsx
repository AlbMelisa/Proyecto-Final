import Row from 'react-bootstrap/Col'
import Col from 'react-bootstrap/Col'
import { CardProducto } from '../CardProducto/CardProducto'

const ProductosP = () => {
  return (
    <div className='mt-3'>
    <h2 className='mt-2 text-center text-dark'>CONSIGUE NUESTROS PRODUCTOS</h2>
    <Row className='g-0 d-flex' >
      <Col sm={12} className='m-2 d-flex justify-content-center'><CardProducto/></Col>
      <Col sm={12} className='m-2 d-flex justify-content-center'><CardProducto image={'https://shop.gymvirtual.com/wp-content/uploads/2020/05/botellines-amarillo.png'} text={'ekmrekm'}/></Col>
      <Col sm={12} className='m-2 d-flex justify-content-center '>
        <CardProducto/>
      </Col>
      <Col sm={12} className='m-2 d-flex justify-content-center'>
        <CardProducto />
      </Col>
    </Row>
  </div>
  )
}

export default ProductosP
import React from 'react'
import { Button, Image } from 'react-bootstrap'
import imagen from '../../images/imagenPP.jpg'
import '../ImagenPrincipal/ImagenPrincipal.css'
const ImagenPrincipal = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Image src={imagen} fluid />
     </div>

    
  )
}

export default ImagenPrincipal
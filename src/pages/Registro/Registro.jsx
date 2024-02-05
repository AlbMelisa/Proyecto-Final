import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import RegisterComponents from '../../components/Register/RegisterComponent'
import '../Registro/Registro.css'
import FooterComponent from '../../components/Footer/FooterComponent'
const Registro = () => {
  return (
    <div className='registroStyle'>
      <NavbarComponent/>
      <RegisterComponents/>
      <FooterComponent/>
    </div>
  )
}

export default Registro
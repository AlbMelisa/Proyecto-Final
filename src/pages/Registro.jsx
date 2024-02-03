import React from 'react'
import NavbarComponent from '../components/NavbarComponent/NavbarComponent'
import RegisterComponents from '../components/Register/RegisterComponent'
import '../pages/Registro.css'
const Registro = () => {
  return (
    <div className='registroStyle'>
      <NavbarComponent/>
      <RegisterComponents/>
    </div>
  )
}

export default Registro
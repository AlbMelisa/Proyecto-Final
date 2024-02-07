import React from 'react'

import {Navigate, Routes, Route} from 'react-router-dom'
import Contacto from '../pages/Contacto/Contacto'
import Home from '../pages/Home/Home'
import Plan from '../pages/Plan/Plan'
import Registro from '../pages/Registro/Registro'
import Error404 from '../pages/Error404/Error404'
import LoginComponent from '../components/Login/LoginComponent'

const PrivateRoute = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/Plan' element={<Plan/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
      <Route path='/Error404' element={<Error404/>}/>
      <Route path='*' element={<Home/>}/> 

    </Routes>
    </>
  )
}

export default PrivateRoute
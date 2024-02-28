import React from 'react'

import {Navigate, Routes, Route} from 'react-router-dom'
import Contacto from '../pages/Contacto/Contacto'
import Home from '../pages/Home/Home'
import Plan from '../pages/Plan/Plan'
import Registro from '../pages/Registro/Registro'
import Error404 from '../pages/Error404/Error404'
import LoginComponent from '../components/Login/LoginComponent'
import Admin from '../pages/Admin/Admin'
import Grilla from '../components/Grilla/Grilla'

const PrivateRoute = ({setUser, isLogged}) => {
  return (
    <>
    <div>private</div>
    <Routes>
      <Route path='/' element={<Navigate to={'/home'}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route exact path='/admin' element={<Admin setUser={setUser}/>} />
      <Route exact path='/Plan' element={<Plan isLogged={isLogged}/>}/>
      <Route exact path='/Error404' element={<Error404/>}/>
      <Route path='/info' element={<div>hola</div>}/>
      <Route path='/' element={<Navigate to={'/admin'}/>}/>

      <Route path='*' element={<Navigate to='/'/>}/> 

    </Routes>
    </>
  )
}

export default PrivateRoute
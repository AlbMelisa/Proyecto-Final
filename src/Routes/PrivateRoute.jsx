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

const PrivateRoute = ({setUser}) => {
  return (
    <>
    <div>private</div>
    <Routes>
     <Route exact path='/admin' element={<Admin setUser={setUser}/>} />
      <Route exact path='/nueva' element={<Grilla setUser={setUser}/>}/>
      <Route exact path='/Plan' element={<Plan/>}/>
      <Route exact path='/Error404' element={<Error404/>}/>
      <Route path='/' element={<Navigate to={'/admin'}/>}/>

      <Route path='*' element={<Navigate to='/'/>}/> 

    </Routes>
    </>
  )
}

export default PrivateRoute
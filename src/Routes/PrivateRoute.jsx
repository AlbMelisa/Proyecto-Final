import React from 'react'

import {Navigate, Routes, Route} from 'react-router-dom'
import Contacto from '../pages/Contacto/Contacto'
import Home from '../pages/Home/Home'
import Plan from '../pages/Plan/Plan'
import Registro from '../pages/Registro/Registro'
import Error404 from '../pages/Error404/Error404'
import LoginComponent from '../components/Login/LoginComponent'
import Grilla from '../components/Grilla/Grilla'
import CrudPlanes from '../pages/CrudPlanes/CrudPlanes'
import CrudUsuarios from '../pages/CrudUsuarios/CrudUsuarios'
import CrudClases from '../pages/CrudClases/CrudClases'

const PrivateRoute = ({setUser, isLogged,userInfo}) => {
  return (
    <>
   <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home setUSer={setUser} userInfo={userInfo} />} />
      {userInfo && userInfo.role === 'admin' && (
        <>
          <Route path='/crudPlanes' element={<CrudPlanes />} />
          <Route path='/crudUsuarios' element={<CrudUsuarios/>}/>
          <Route path='/crudClases' element={<CrudClases/>}/>
        </>
      )}
      <Route exact path='/Plan' element={<Plan isLogged={isLogged} />} />
      <Route exact path='/Error404' element={<Error404 />} />
      <Route path='/info' element={<div>hola</div>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    </>
  )
}

export default PrivateRoute
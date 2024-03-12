import React from 'react'

import {Navigate, Routes, Route} from 'react-router-dom'
import Contacto from '../pages/Contacto/Contacto'
import Home from '../pages/Home/Home'
import Plan from '../pages/Plan/Plan'
import Registro from '../pages/Registro/Registro'
import Error404 from '../pages/Error404/Error404'
import CrudClases from '../pages/CrudClases/CrudClases'
import SobreNosotros from '../pages/SobreNosotros/SobreNosotros'
import Clases from '../pages/Clases/Clases'

const PrivateRoute = ({setUser, isLogged,userInfo}) => {
  return (
    <>
   <Routes>
      <Route path='/' element={<Navigate to='/Home' />} />
      <Route path='/Home' element={<Home setUSer={setUser} userInfo={userInfo} />} />
      {userInfo && userInfo.role === 'admin' && (
        <>
          <Route path='/crud/Planes' element={<CrudClases setUSer={setUser} nombre="planes"/>} />
         <Route path='/crud/Usuarios' element={<CrudClases setUSer={setUser} nombre="usuarios"/>}/>
          <Route path='/crud/Clases' element={<CrudClases setUSer={setUser} nombre="clases"/>}/>
        </>
      )}  
      <Route path='/Clases' element={<Clases userInfo={userInfo}/>} />
      <Route path='/Plan/full' element={<Plan isLogged={isLogged} nombre="full"/>} />
      <Route path='/Plan/musculacion' element={<Plan isLogged={isLogged} nombre="musculacion" />} />
      <Route path='/Plan/clases' element={<Plan isLogged={isLogged} nombre="clases"/>} />
      <Route path='/Registro' element={<Registro/>}/>
      <Route path='/Contacto' element={<Contacto/>}/>
      <Route path='/SobreNosotros' element={<SobreNosotros/>}/>
      <Route path='/Error404' element={<Error404/>}/>
      <Route exact path='/Error404' element={<Error404 />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    </>
  )
}

export default PrivateRoute
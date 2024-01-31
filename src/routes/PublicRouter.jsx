import React from 'react'
import LoginComponent from '../Components/LoginComponent'
import RegisterComponent from '../Components/RegisterComponent'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export const PublicRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>} />
      <Route path='login' element={<LoginComponent/>} />
      <Route path='register' element={<RegisterComponent/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default PublicRouter;


import { useState } from 'react'
import './App.css'
import PublicRouter from './Routes/PublicRouter'
import PrivateRoute from './Routes/PrivateRoute'
import { BrowserRouter } from 'react-router-dom'

function App() {

  const [user , setUser] = useState({ })
  return (
    <>
    {
      !user.isLogged ?
      <PublicRouter/>
      :
      <BrowserRouter>
      <PrivateRoute/>
      </BrowserRouter>
    }
    </>
  )
}

export default App


import { useState } from 'react'
import PrivateRoute from './Routes/PrivateRoute'
import { BrowserRouter } from 'react-router-dom'
import PublicRouter  from './Routes/PublicRouter'

function App() {

  const [user , setUser] = useState({ token:null,userInfo:null, isLogged:false})

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

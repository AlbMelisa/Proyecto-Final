
import { useEffect, useState } from 'react'
import PrivateRoute from './Routes/PrivateRoute'
import { BrowserRouter } from 'react-router-dom'
import PublicRouter  from './Routes/PublicRouter'
import { jwtDecode } from 'jwt-decode'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import FooterComponent from './components/Footer/FooterComponent'

function App() {

  const [user , setUser] = useState({ token:null, userInfo:null, isLogged:false})
  const isUserLogged = localStorage.getItem('isUserLogged')

  const checkIfUserLogged = () => {
    if(isUserLogged){
      const token = localStorage.getItem('token')
      const decoded = jwtDecode(token)
      setUser({
        token: token,
        userInfo:decoded,
        isLogged:true
      })
    }else{
      return
    }
  }
  useEffect(()=>{
    checkIfUserLogged()
  },[])
  return (
    <>
    {
      !user.isLogged ?
      <PublicRouter isLogged={user.isLogged} setUser={setUser}/>
      :
      <BrowserRouter>
        {<NavbarComponent isLogged={user.isLogged} setUser={setUser}/>}
          <PrivateRoute/>
        {<FooterComponent/>}
      </BrowserRouter>
    }
</>
  )
}

export default App

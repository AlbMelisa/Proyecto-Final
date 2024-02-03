import {BrowserRouter,
Routes,Route,Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Plan from '../pages/plan'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404'
import Login from '../pages/Login'
import RegisterComponents from '../components/Register/RegisterComponent'
import Registro from '../pages/Registro'

const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/PlanUno' element={<Plan/>}/>
        <Route path='/Registro' element={<Registro/>}/>

        <Route path='/Plan/:id' element={<div>ekmre</div>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Error404' element={<Error404/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter
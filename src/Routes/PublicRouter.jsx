import {BrowserRouter,
Routes,Route,Navigate} from 'react-router-dom'

import Home from '../pages/Home'


const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/home' element={<Home/>}/>

        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter
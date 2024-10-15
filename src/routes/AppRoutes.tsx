import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from '../App'
import loginForm from '../modules/login/loginForm'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={App}/>
            <Route path='/login' Component={loginForm}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import authService from './services/authServices'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/authSlice'
import  Dashboard  from './pages/Dashboard'
import Employee from './pages/Employee'

function App() {
  const dispatch=useDispatch()
  console.log(useSelector((state)=>state.auth));
 useEffect(()=>{
  const fetchUser=async()=>{
    const response=await authService.getUser();
    console.log(response);
    if(response.data.statusCode==200){
      dispatch(login(response.data.message))
    }else{
      dispatch(logout())
    }
  }
  fetchUser()
 },[])
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/employees' element={<Employee/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

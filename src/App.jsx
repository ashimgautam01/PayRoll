
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import authService from './services/authServices'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/authSlice'
import  Dashboard  from './pages/Dashboard'
import Employee from './pages/Employee'
import ProfilePage from './pages/Profile'
import AddCompany from './pages/AddCompany'
import Salary from './pages/Salary'
import Leave from './pages/Leave'

function App() {
  const dispatch=useDispatch()
 useEffect(()=>{
  const fetchUser=async()=>{
    const response=await authService.getUser();
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
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/addcompany' element={<AddCompany/>}/>
        <Route path='/salary' element={<Salary/>}/>
        <Route path='/leaves' element={<Leave/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

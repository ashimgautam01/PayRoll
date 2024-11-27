
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import authService from './services/authServices'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
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
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

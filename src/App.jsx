
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import authService from './services/authServices'
import { useEffect } from 'react'
function App() {
 useEffect(()=>{
  const fetchUser=async()=>{
    const response=await authService.getUser()
    console.log(response);
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

import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../components/Login"
import Register from "../components/Register"


const Routings = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default Routings
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../components/Login"
import Register from "../components/Register"
import Profile from "../components/Profile"
import ProtectedRoute from "../auth/ProtectedRoute"


const Routings = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route
          path="/user/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        </Routes>
    </div>
  )
}

export default Routings
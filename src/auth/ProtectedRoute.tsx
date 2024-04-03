import { Route, Routes } from "react-router-dom";
import Profile from "../components/Profile";
import Dashboard from "../pages/Dashboard";

const ProtectedRoute = () => {

  return(
    <Routes>
      <Route path="/users/profile" element={<Profile />} />
      <Route path="/users/dashboard" element={<Dashboard />} />
    </Routes>
  )
  
};

export default ProtectedRoute;

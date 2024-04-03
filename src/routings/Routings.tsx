import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import { useAuth } from "../auth/AuthContext";
import ProtectedRoute from "../auth/ProtectedRoute";

const Routings = () => {
  const { user } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {user ? (
          <Route path="/*" element={<ProtectedRoute />} />
        ) : (
          <Route path="/*" element={<Login />} />
        )}
      </Routes>
    </div>
  );
};

export default Routings;

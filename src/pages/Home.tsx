import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext"


const Home = () => {

    const { user } = useAuth();
    

  return (
    <div>Home
        <h1>{JSON.stringify(user)}</h1>
        {user ? (
                    <li><Link to="/user/profile">Profile</Link></li>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
    </div>
  )
}

export default Home
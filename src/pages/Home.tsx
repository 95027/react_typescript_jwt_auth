import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Home = () => {

  const {user} =useAuth();

  console.log('home', user);
  

  return (
    <div>
      Home
      <ul>
        <li>
          <Link to="/users/profile">Profile</Link>
        </li>
        <li>
          <Link to="/users/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

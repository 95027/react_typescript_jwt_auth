import { useAuth } from "../auth/AuthContext"

const Dashboard = () => {

    const {user} = useAuth();

  return (
    <div>{user.name} Dashboard</div>
  )
}

export default Dashboard
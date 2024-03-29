import { useAuth } from "../auth/AuthContext"



const Profile = () => {

    const { user } = useAuth();

  return (
    <div>Profile:
        <div>
            <h1>{user?.name}</h1>
            <h1>{user?.email}</h1>
        </div>
    </div>
  )
}

export default Profile
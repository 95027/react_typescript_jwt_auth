import { useState } from "react";
import instance from "../api/instance";


const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const submitHandler =async (e:any) => {

        e.preventDefault();

        try {
            const res = await instance.post('/auth/forgot-password', {email});
            console.log(res);
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div>
        <h1>Forgot Password</h1>

        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <button>send reset link</button>
        </form>

    </div>
  )
}

export default ForgotPassword
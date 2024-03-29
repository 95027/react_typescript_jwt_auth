import { useState } from 'react';
import instance from '../api/instance';
import { useNavigate } from 'react-router-dom';
import { useAuth, AuthContextType } from '../auth/AuthContext';


const Login = () => {


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const { login } : AuthContextType = useAuth();

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const res = await instance.post('/users/login', formData);
            console.log(res);
            login(res.data.token, res.data.user);

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

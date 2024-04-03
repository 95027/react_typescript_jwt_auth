import { useState } from 'react';
import instance from '../api/instance';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [avatar, setAvatar] = useState<any>();
    const navigate = useNavigate();

    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const handleFileChange = (e : any) => {
        const { files } = e.target;
        setAvatar(files[0]);
    }

    const handleSubmit =async (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('avatar', avatar);
        try {
            const res= await instance.post('/auth/register', formData);
            console.log(res);
            navigate('/login');
            setData(() => ({
                name: '',
                email: '',
                password: '',
            }));
            setAvatar(null);
            
        } catch (error) {
            console.log(error);
            
        }
        //console.log(formData); // Just for demonstration
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={data.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={data.email} 
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
                        value={data.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="avatar">Avatar:</label>
                    <input 
                        type="file" 
                        id="avatar" 
                        name="avatar" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        required 
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;

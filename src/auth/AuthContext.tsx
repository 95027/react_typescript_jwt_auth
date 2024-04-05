import { createContext, useContext, useEffect, useState } from "react";
import instance from "../api/instance";

export interface AuthContextType {
    getUserByToken: () =>void;
    logout: () => void;
    user: any; 
}

const AuthContext = createContext<AuthContextType | any>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: {children:any}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserByToken();
    }, []);

    const getUserByToken = async () => {

        const res = await instance.get('/auth/getUserByToken');

        setUser(res.data.user);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const contextValue: AuthContextType = { 
        getUserByToken,
        logout,
        user,
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
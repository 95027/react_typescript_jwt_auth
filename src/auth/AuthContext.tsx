import { createContext, useContext, useEffect, useState } from "react";

export interface AuthContextType {
    login: (token: string, user: any) => void;
    logout: () => void;
    user: any; 
}

const AuthContext = createContext<AuthContextType | any>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: {children:any}) => {

    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (token:any, user:any) => {

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
    };

    const contextValue: AuthContextType = { 
        login,
        logout,
        user
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
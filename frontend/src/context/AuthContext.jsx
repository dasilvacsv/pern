import {createContext, useContext, useState} from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const[errors, setErrors] = useState(null)

    const signup = async (data) =>{
        const res = await axios.post('http://localhost:80/api/signup', data, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          });
          console.log(res.data);
          setUser(res.data)
    }

    const signin = async (data) => {
        console.log(data)
        const res = await axios.post('http://localhost:80/api/signin', data, {
          withCredentials: true
        })
        console.log(res.data)
        setUser(res.data)
    }
    return <AuthContext.Provider value={{
        user, 
        isAuth,
        errors,
        signup,
        signin
    }}>
        {children}
    </AuthContext.Provider>
}
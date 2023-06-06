import { createContext, useEffect, useState } from "react";
import { ILoginData } from "../../components/LoginForm/validator";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import {
    AuthContextValues,
    IAuthProviderProps
} from "./types";
import { IClientProps } from "./types";


export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({children}: IAuthProviderProps) => {
    const navigate = useNavigate()
    const [ loading, setLoading ]= useState(true)
    const [ clientInfo, setClientInfo ] = useState({} as IClientProps)


    useEffect(() => {
        const token = localStorage.getItem("SVContacts | Token:")

        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`
        }
        setLoading(false)
    },[])

    const signIn = async (data: ILoginData) => {
        try {
            const response = await api.post("/login", data)

            const { token } = response.data

            localStorage.setItem("SVContacts | Token:", token)
            api.defaults.headers.common.authorization = `Bearer ${token}`

            // Toast
            navigate("dashboard")

        } catch(error) {
            console.error(error)
        }
    }

    const getUserInfo = async () => {
        try {
            const response = await api.get<IClientProps>("/clients/info")
            setClientInfo(response.data)

        } catch (error) {
            navigate("/")
        }
    }

    return (
        <AuthContext.Provider
            value={{
                signIn,
                loading,
                clientInfo,
                getUserInfo
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
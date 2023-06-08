import { createContext, useEffect, useState } from "react";
import { ILoginData } from "../../components/LoginForm/validator";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import {
    AuthContextValues,
    IAuthProviderProps,
} from "./types";
import { IClientProps } from "./types";
import { IRegisterData } from "../../components/RegisterForm/validator";
import { toast } from "react-toastify";


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

            toast.success("Welcome, nice to see you")
            setTimeout(() => {
                navigate("dashboard")
            }, 2000);

        } catch (error: any) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Something went wrong? Please try again")
            }
            console.log(error)
        }
    }

    const signUp = async (data: IRegisterData) => {
        try {
            await api.post("/clients/", data)
            toast.success("Account Created")

            setTimeout(() => {
                navigate("login")
            }, 2000);

        } catch (error: any) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Something went wrong? Please try again")
            }
            console.log(error)
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

    const updateClient = async (id: number, data: Partial<IClientProps>) => {
        try {
            const response = await api.patch<IClientProps>(`/clients/${id}/`, data)
            setClientInfo(response.data)
            toast.success("Account Updated")

        } catch(error: any) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Something went wrong? Please try again")
            }
            console.log(error)
        }
    }

    const deleteClient = async (id: number) => {
        try {
            await api.delete<void>(`/clients/${id}/`)
            toast.success("We goin to miss you ;-;")

            setTimeout(() => {
                navigate("login")
            }, 2000);

        } catch (error: any) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Something went wrong? Please try again")
            }
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signUp,
                loading,
                clientInfo,
                getUserInfo,
                updateClient,
                deleteClient
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

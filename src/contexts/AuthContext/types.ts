import { ILoginData } from "../../components/LoginForm/validator"

export interface IAuthProviderProps {
    children: React.ReactNode
}

export interface IClientProps {
    id: number
    name: string
    email: string
    phone_number: string
    created_at: string
    client_id: number
}

export interface AuthContextValues {
    signIn: (data: ILoginData) => void
    loading: boolean
    clientInfo: IClientProps 
    getUserInfo: () => Promise<void>

}
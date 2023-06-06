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
export type IClientData = Omit<IClientProps, "created_at" | "client_id" | "id"> 

export type IRegisterData = Omit<IClientProps, "client_id">

export interface AuthContextValues {
    signIn: (data: ILoginData) => void
    signUp: (data:IRegisterData) => void

    updateClient: (id: number, data: Partial<IClientProps>) => void
    deleteClient: (id: number) => void
    getUserInfo: () => Promise<void>

    loading: boolean
    clientInfo: IClientProps 
}

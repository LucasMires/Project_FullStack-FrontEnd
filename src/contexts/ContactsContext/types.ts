import { IClientProps } from "../AuthContext/types"

export interface IContactsProps extends IClientProps {}

export interface IContactContextValues {
    contacts: IContactsProps[]
    logout: () => void
    verifyToken: () => void
    getContacts: () => Promise<void>
}

export interface IContactProviderProps {
    children: React.ReactNode
}
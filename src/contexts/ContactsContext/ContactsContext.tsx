import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import {
    IContactContextValues,
    IContactProviderProps,
    IContactsProps
} from "./types";


export const ContactsContext = createContext({} as IContactContextValues)

export const ContactsProvider = ({children}: IContactProviderProps) => {
    const navigate = useNavigate()
    const [ contacts, setContacts ] = useState<IContactsProps[]>([])

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    const verifyToken = () => {
        const token = localStorage.getItem("SVContacts | Token:")
        if (!token) {
            navigate("/")
        }
    }

    const getContacts = async () => {
        try {
            const response = await api.get<IContactsProps[]>("/contacts")
            setContacts(response.data)

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <ContactsContext.Provider
            value={{
                contacts,
                logout,
                verifyToken,
                getContacts,
            }}
        >
            { children }
        </ContactsContext.Provider>
    )
}

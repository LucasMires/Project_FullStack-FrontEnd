import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import {
    IContactContextValues,
    IContactProviderProps,
    IContactsProps,
} from "./types";
import { IClientData, IClientProps } from "../AuthContext/types";


export const ContactsContext = createContext({} as IContactContextValues)

export const ContactsProvider = ({children}: IContactProviderProps) => {
    const navigate = useNavigate()

    const [ contacts, setContacts ] = useState<IContactsProps[]>([])
    const [ activeContact, setActiveContact ] = useState({} as IContactsProps)

    const [ clientModal, setClientModal ] = useState(false)
    const [ contactsModal, setContactsModal ] = useState(false)
    const [ warningModal, setWarningModal ] = useState(false)
    const [ addContactModal, setAddContactModal ] = useState(false)


    const callClientModal = () => {
        setClientModal(!clientModal)
    }

    const callContactModal = () => {
        setContactsModal(!contactsModal)
    }

    const callWarningModal = () => {
        setWarningModal(!warningModal)
    }

    const callAddContact = () => {
        setAddContactModal(!addContactModal)
    }
    const closeModals = () => {
        setClientModal(false)
        setContactsModal(false)
        setWarningModal(false)
        setAddContactModal(false)
    }

    const selectedContact = (contact: IContactsProps) => {
        setActiveContact(contact)
    }

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

    const createContact = async (data: IClientData) => {
        try {
            await api.post<IContactsProps>("/contacts", data)
            getContacts()

        } catch (error) {
            console.error(error)
        }
    }

    const updateContact = async (id: number, data: Partial<IClientProps>) => {
        try {
            await api.patch<IContactsProps>(`/contacts/${id}`, data)
            getContacts()

        } catch (error) {
            console.error(error)
        }
    }
    const deleteContact = async (id: number) => {
        try {
            await api.delete<void>(`/contacts/${id}`)
            getContacts()

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ContactsContext.Provider
            value={{
                contacts,
                activeContact,

                logout,
                verifyToken,
                getContacts,

                clientModal,
                contactsModal,
                warningModal,
                addContactModal,

                callClientModal,
                callContactModal,
                callWarningModal,
                callAddContact,

                closeModals,
                selectedContact,

                createContact,
                updateContact,
                deleteContact
            }}
        >
            { children }
        </ContactsContext.Provider>
    )
}

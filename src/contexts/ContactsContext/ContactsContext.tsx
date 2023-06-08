import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import {
    IContactContextValues,
    IContactProviderProps,
    IContactsProps,
} from "./types";
import { IClientData, IClientProps } from "../AuthContext/types";
import { toast } from "react-toastify";


export const ContactsContext = createContext({} as IContactContextValues)

export const ContactsProvider = ({children}: IContactProviderProps) => {
    const navigate = useNavigate()

    const [ contacts, setContacts ] = useState<IContactsProps[]>([])
    const [ activeContact, setActiveContact ] = useState({} as IContactsProps)

    const [ filteredContacts, setFilteredContacts ] = useState<IContactsProps[]>(contacts)

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

    const callAddContactModal = () => {
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
        toast.warning("Closing Session")
        setTimeout(() => {
            navigate("/")
        }, 2000);
    }

    const verifyToken = () => {
        const token = localStorage.getItem("SVContacts | Token:")

        if (!token) {
            logout()
        }
    }

    const getContacts = async () => {
        try {
            const response = await api.get<IContactsProps[]>("/contacts")
            setContacts(response.data)

        } catch (error: any) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Something went wrong? Please try again")
            }
            console.log(error)
        }
    }

    const createContact = async (data: IClientData) => {
        try {
            await api.post<IContactsProps>("/contacts", data)
            toast.success("Contact Created")
            getContacts()

        } catch (error: any) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Something went wrong? Please try again")
            }
            console.log(error)
        }
    }

    const updateContact = async (id: number, data: Partial<IClientProps>) => {
        try {
            await api.patch<IContactsProps>(`/contacts/${id}`, data)
            toast.success("Contact Updated")
            getContacts()

        } catch (error: any) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Something went wrong? Please try again")
            }
            console.log(error)
        }
    }

    const deleteContact = async (id: number) => {
        try {
            await api.delete<void>(`/contacts/${id}`)
            toast.success("Contact Deleted")
            getContacts()


        } catch (error: any) {
            if (error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Something went wrong? Please try again")
            }
            console.log(error)
        }
    }
 
    const SearchContact = async (contactName: string) => {
        const contactFiltered = contacts.filter((contact) => {
            if (contact.name.toLowerCase().includes(contactName.toLowerCase())) {
                return contact
            }
        })
        setFilteredContacts(contactFiltered)
    }

    return (
        <ContactsContext.Provider
            value={{
                contacts,
                filteredContacts,
                activeContact,

                logout,
                verifyToken,
                getContacts,
                SearchContact,

                clientModal,
                contactsModal,
                warningModal,
                addContactModal,

                callClientModal,
                callContactModal,
                callWarningModal,
                callAddContactModal,

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

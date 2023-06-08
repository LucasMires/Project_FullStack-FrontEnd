import { IClientData, IClientProps } from "../AuthContext/types"

export interface IContactsProps extends IClientProps {}

export interface IContactContextValues {
    contacts: IContactsProps[]
    activeContact: IContactsProps

    logout: () => void
    verifyToken: () => void
    filteredContacts: IContactsProps[]

    getContacts: () => Promise<void>
    SearchContact: (contactName: string) => Promise<void>
    createContact: (data: IClientData) => Promise<void>
    updateContact: (id: number, data: Partial<IClientProps>) => Promise<void>
    deleteContact: (id: number) => Promise<void>

    callClientModal: () => void
    callContactModal: () => void
    callWarningModal: () => void
    callAddContactModal: () => void

    closeModals: () => void
    selectedContact: (contact: IContactsProps) => void

    clientModal: boolean
    contactsModal: boolean
    warningModal: boolean
    addContactModal: boolean
}

export interface IContactProviderProps {
    children: React.ReactNode
}

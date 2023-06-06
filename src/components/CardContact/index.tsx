import { StyledCard } from "./style"
import { IContactsProps } from "../../contexts/ContactsContext/types" 
import { ContextsProps } from "../../hooks/ContextsProps"

interface ICardContactProps {
    contact: IContactsProps
}

export const CardContact = ({ contact }: ICardContactProps) => {

    const { contactProps: {
        selectedContact,
        callContactModal
    } } = ContextsProps()

    const targetCard = () => {
        selectedContact(contact)
        callContactModal()
    }

    return (
        <StyledCard onClick={targetCard}>
            <h2>{contact.name}</h2>
            <p>Registered in: {contact.created_at.slice(0,10)}</p>
        </StyledCard>
    )
}
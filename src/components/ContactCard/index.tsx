import { StyledCard } from "./style"
import { IContactsProps } from "../../contexts/ContactsContext/types" 
import { ContextsProps } from "../../hooks/ContextsProps"

interface IContactCardProps {
    contact: IContactsProps
}

export const ContactCard = ({ contact }: IContactCardProps) => {

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
        </StyledCard>
    )
}

import { StyledCard } from "./style"
import { IContactsProps } from "../../contexts/ContactsContext/ContactsContext"

interface ICardContactProps {
    contact: IContactsProps
}


export const CardContact = ({ contact }: ICardContactProps) => {
    const registedIn = contact.created_at.slice(0,10)

    return (
        <StyledCard>
            <h2>{contact.name}</h2>
            {contact.email && <p>{contact.email}</p>}
            <p>{contact.phone_number}</p>
            <p>Registered in: {registedIn}</p>
        </StyledCard>
    )
}
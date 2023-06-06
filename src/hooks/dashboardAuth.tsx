import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext/AuthContext"
import { ContactsContext } from "../contexts/ContactsContext/ContactsContext"

export const DashboardAuth = () => {
    const authProps = useContext(AuthContext)
    const contactProps = useContext(ContactsContext)

    return { authProps, contactProps }
}
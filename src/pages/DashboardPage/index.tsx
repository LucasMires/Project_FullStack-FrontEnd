import { StyledMain } from "./style"
import { CardContact } from "../../components/CardContact"
import { CardClient } from "../../components/CardClient"
import { ContextsProps } from "../../hooks/ContextsProps"
import { useEffect } from "react"
import { Header } from "../../components/Header"
import { BaseModal } from "../../components/BaseModal"
import { ClientModal } from "../../components/ClientModal"
import { Button } from "../../components/Button"
import { ContactModal } from "../../components/ContactModal"
import { NewContactModal } from "../../components/NewContactModal"

export const DashboardPage = () => {
    const {
        authProps:{ getUserInfo },
        contactProps: {
            contacts,
            getContacts,
            verifyToken,

            clientModal,
            contactsModal,
            warningModal,
            addContactModal,
            callAddContact
        }
    } = ContextsProps()

    useEffect(()=> {
        getUserInfo()
        verifyToken()
        getContacts()
    },[])

    return (
        <>
        <Header />
            <StyledMain>
                <section className="userInfo_section">
                    <h2>User Information:</h2>
                    <CardClient/>

                </section>
                <section className="contacts_section">
                    <div>
                        <h2>Contacts</h2>
                        <Button
                            type="button"
                            children="Add Contact"
                            onClick={callAddContact}
                        />
                    </div>
                    <ul>
                        {
                            contacts.map(contact => <CardContact key={contact.id} contact={contact}/>)
                        }
                    </ul>
                </section>

                {
                    clientModal && 
                    <BaseModal>
                        <ClientModal />
                    </BaseModal>
                }

                {
                    contactsModal && 
                    <BaseModal>
                        <ContactModal />
                    </BaseModal>
                }

                {
                    warningModal && 
                    <BaseModal>
                        <NewContactModal />
                    </BaseModal>
                }

                {
                    addContactModal && 
                    <BaseModal>
                        <NewContactModal />
                    </BaseModal>
                }

        </StyledMain>
        </>
    )
}
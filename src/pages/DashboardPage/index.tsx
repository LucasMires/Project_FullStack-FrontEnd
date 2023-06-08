import { StyledMain } from "./style"
import { ContactCard } from "../../components/ContactCard"
import { ClientCard } from "../../components/ClientCard"
import { ContextsProps } from "../../hooks/ContextsProps"
import { useEffect } from "react"
import { Header } from "../../components/Header"
import { BaseModal } from "../../components/BaseModal"
import { ClientModal } from "../../components/ClientModal"
import { Button } from "../../components/Button"
import { ContactModal } from "../../components/ContactModal"
import { AddContactModal } from "../../components/AddContactModal"
import { WarningModal } from "../../components/WarningModal"

export const DashboardPage = () => {
    const {
        authProps:{ getUserInfo },
        contactProps: {
            filteredContacts,
            contacts,
            getContacts,
            verifyToken,

            clientModal,
            contactsModal,
            warningModal,
            addContactModal,
            callAddContactModal,

            SearchContact
        }
    } = ContextsProps()

    useEffect(()=> {
        verifyToken()
        getUserInfo()
        getContacts()
    },[])
    
    return (
        <>
        <Header />
            <StyledMain>
                <section className="userInfo_section">
                    <h2>Account Information</h2>
                    <ClientCard/>

                </section>
                <section className="contacts_section">
                        <h2>Contacts</h2>
                    <div>
                        <input 
                            type="text"
                            placeholder="Search Contact"
                            onChange={(event) => SearchContact(event.target.value)}
                        />
                        <Button
                            type="button"
                            children="Add Contact"
                            onClick={callAddContactModal}
                            className="brandButton1"
                        />
                    </div>
                    <ul>
                        {
                            filteredContacts.length !== 0?

                            filteredContacts.map(contact => <ContactCard key={contact.id} contact={contact}/>)
                            :
                            contacts.map(contact => <ContactCard key={contact.id} contact={contact}/>) 
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
                        <WarningModal />
                    </BaseModal>
                }

                {
                    addContactModal && 
                    <BaseModal>
                        <AddContactModal />
                    </BaseModal>
                }

        </StyledMain>
        </>
    )
}

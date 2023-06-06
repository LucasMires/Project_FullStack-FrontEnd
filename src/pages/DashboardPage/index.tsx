import { Button } from "../../components/Button"
import { StyledMain } from "./style"
import { CardContact } from "../../components/CardContact"
import { CardClient } from "../../components/CardClient"
import { DashboardAuth } from "../../hooks/dashboardAuth"
import { useEffect } from "react"

export const DashboardPage = () => {
    const {
        authProps:{clientInfo, getUserInfo},
        contactProps: {
            contacts, getContacts, logout, verifyToken
        }
    } = DashboardAuth()

    useEffect(()=> {
        getUserInfo()
        verifyToken()
        getContacts()
    },[])

    return (
        <>
        {/* header */}
            <Button 
                type="button"
                onClick={logout}
                children="Logout"
            />
            <StyledMain>
                <section className="userInfo_section">
                    <h2>User Information:</h2>
                    <CardClient
                        key={clientInfo.client_id}
                        userInfo={clientInfo}
                    />

                    {/* </CardClient> */}
                </section>
                <section className="contacts_section">
                    <h2>Contacts</h2>
                    <ul>
                        {
                            contacts.map(
                                contact => <CardContact key={contact.id} contact={contact}/>
                            )
                        }
                    </ul>
                </section>
                {/* Modal - ComponentModal */}

        </StyledMain>
        </>
    )
}
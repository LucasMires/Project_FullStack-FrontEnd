import { AuthProvider } from "./contexts/AuthContext/AuthContext"
import { ContactsProvider } from "./contexts/ContactsContext/ContactsContext"
import { MainRoutes } from "./routes"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {
    return (
        <>
            <GlobalStyles/>
            <AuthProvider>
                <ContactsProvider>
                    <MainRoutes/>
                </ContactsProvider>
            </AuthProvider>
        </>
    )
}

export default App

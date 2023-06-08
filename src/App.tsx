import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./contexts/AuthContext/AuthContext"
import { ContactsProvider } from "./contexts/ContactsContext/ContactsContext"
import { MainRoutes } from "./routes/MainRoutes"
import { GlobalStyles } from "./styles/GlobalStyles"
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <GlobalStyles/>
            <AuthProvider>
                <ContactsProvider>
                        <MainRoutes/>
                </ContactsProvider>
            </AuthProvider>

            <ToastContainer
                position="top-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default App

import { LoginForm } from "../../components/LoginForm"
import { StyledMain } from "./style"

export const LoginPage = () => {
    return (
        <>
            <StyledMain>
                <h2>Login</h2>
                <LoginForm/>
            </StyledMain>
        </>
    )
}
import { useForm } from "react-hook-form"
import { StyledForm } from "./style"
import { InputField } from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { ILoginData, schema } from "./validator"
import { Button } from "../Button"
import { ContextsProps } from "../../hooks/ContextsProps" 
import { Link } from "react-router-dom"

export const LoginForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<ILoginData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    const { authProps:{ signIn } } = ContextsProps()

    return (
        <StyledForm onSubmit={ handleSubmit(signIn) }>
            <h2>SV Contacts - Login</h2>

            <div>
                <Link to="/register">
                    Register
                </Link>
                <Link to="/Login">
                    Login
                </Link>
            </div>
            <InputField 
                id="email"
                label="Email:"
                type="email"
                placeholder="Email"
                { ...register("email") }
                errors={errors.email?.message}
            />

            <InputField 
                id="password"
                label="Password:"
                type="password"
                placeholder="Password"
                { ...register("password") }
                errors={errors.password?.message}
            />
            <Button 
                type="submit"
                children= "Login"
                className="brandButton2"
            />
            <p>Create an account <Link to="/register">Signup now</Link>
            </p>
        </StyledForm>
    )
}

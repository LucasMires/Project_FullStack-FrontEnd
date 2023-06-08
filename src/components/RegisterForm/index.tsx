import { useForm } from "react-hook-form"
import { StyledForm } from "./style"
import { InputField } from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { IRegisterData, schema } from "./validator"
import { ContextsProps } from "../../hooks/ContextsProps"
import { Button } from "../Button"
import { Link } from "react-router-dom"


export const RegisterForm = () => {
    const { register, handleSubmit } = useForm<IRegisterData>({
        resolver: zodResolver(schema)
    })

    const { authProps:{signUp} } = ContextsProps()
    
    return (
        <StyledForm onSubmit={ handleSubmit(signUp) }>
            <h2>SV Contacts - Register</h2>

            <div>
                <Link to="/Register">
                    Register
                </Link>
                <Link to="/login">
                    Login
                </Link>
            </div>

            <InputField 
                id="name"
                label="Name:"
                type="text"
                placeholder="Name"
                { ...register("name") }
            />

            <InputField 
                id="email"
                label="Email:"
                type="email"
                placeholder="Email"
                { ...register("email") }
            />

            <InputField 
                id="phone_number"
                label="Phone Number:"
                type="text"
                placeholder="Phone Number"
                { ...register("phone_number") }
            />

            <InputField 
                id="password"
                label="Password:"
                type="password"
                placeholder="Password"
                { ...register("password") }
            />
            <Button 
                type="submit"
                children="Sign In"
                className="brandButton2"
            />
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </StyledForm>
    )
}

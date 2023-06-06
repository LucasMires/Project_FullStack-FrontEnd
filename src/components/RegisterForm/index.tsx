import { useForm } from "react-hook-form"
import { StyledForm } from "./style"
import { InputField } from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { IRegisterData, schema } from "./validator"
import { AuthContext } from "../../contexts/AuthContext/AuthContext" 
import { useContext } from "react"

export const RegisterForm = () => {
    const { register, handleSubmit } = useForm<IRegisterData>({
        resolver: zodResolver(schema)
    })
    const {  } = useContext(AuthContext)
    

    return (
        <StyledForm onSubmit={ handleSubmit(() => console.log("hi")) }>
            <InputField 
                // disabled
                // fieldClass=""
                // inputClass=""
                id="name"
                label="name"
                type="text"
                placeholder="Insert your name"
                { ...register("name") }
            />
            <InputField 
                // disabled
                // fieldClass=""
                // inputClass=""
                id="email"
                label="email"
                type="text"
                placeholder="Insert your email"
                { ...register("email") }
            />
            <InputField 
                // disabled
                // fieldClass=""
                // inputClass=""
                id="phone_number"
                label="phone_number"
                type="text"
                placeholder="Insert your phone_number"
                { ...register("phone_number") }
            />
            <InputField 
                // disabled
                // fieldClass=""
                // inputClass=""
                id="password"
                label="password"
                type="text"
                placeholder="Insert your password"
                { ...register("password") }
            />
        </StyledForm>
    )
}
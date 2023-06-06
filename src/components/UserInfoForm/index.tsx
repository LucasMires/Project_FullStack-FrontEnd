import { useForm } from "react-hook-form"
import { StyledForm } from "./style"
import { InputField } from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schema } from "./validator"
import { AuthContext } from "../../contexts/AuthContext/AuthContext" 
import { useContext } from "react"
import { Button } from "../Button"

export const UserInfoForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<LoginData>({
        resolver: zodResolver(schema),
        mode: "onBlur"
    })
    const { signIn } = useContext(AuthContext)
    

    return (
        <StyledForm onSubmit={ handleSubmit(signIn) }>
            <InputField 
                // disabled
                // fieldClass=""
                // inputClass=""
                id="email"
                label="email"
                type="text"
                placeholder="Insert your email"
                { ...register("email") }
                errors={errors.email?.message}
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
                errors={errors.password?.message}
            />
            <Button 
                type="submit"
                children= "Login"
            />
        </StyledForm>
    )
}
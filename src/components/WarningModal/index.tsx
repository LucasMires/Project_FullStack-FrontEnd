import { StyledSection } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IUpdatedClientData, schema } from "./validator"
import { InputField } from "../Input"
import { Button } from "../Button"
import { ContextsProps } from "../../hooks/ContextsProps"


export const ClientModal = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<IUpdatedClientData>({
        resolver: zodResolver(schema),
        mode: "onBlur"
    })

    const {
        authProps: { clientInfo, updateClient },
        contactProps:{ closeModals }
    } = ContextsProps()

    const serializerData = async (data: IUpdatedClientData) => {
        // Remeber to make a change to the type.
        const newObject: any = {}

        const dataKeys = Object.keys(data)
        const dataValues = Object.values(data)
        
        dataKeys.forEach((element, index) => {
            if (dataValues[index] !== "") {
                newObject[element] = dataValues[index]
            }
        })

        if (Object.keys(newObject).length == 0) {
            return
        }
        updateClient(clientInfo.id, newObject)
        closeModals()
    }

    return (
        <StyledSection>
            <form onSubmit={ handleSubmit(serializerData) }>
                <InputField 
                    // disabled
                    // fieldClass=""
                    // inputClass=""
                    id="name"
                    label="Name:"
                    type="text"
                    placeholder="Name"
                    { ...register("name") }
                    errors={errors.name?.message}
                
                />
                <InputField 
                    // disabled
                    // fieldClass=""
                    // inputClass=""
                    id="email"
                    label="Email:"
                    type="email"
                    placeholder="Email"
                    { ...register("email") }
                    errors={errors.email?.message}
                
                />
                <InputField 
                    // disabled
                    // fieldClass=""
                    // inputClass=""
                    id="Phone Number"
                    label="Phone Number:"
                    type="text"
                    placeholder="Phone Number"
                    { ...register("phone_number") }
                    errors={errors.phone_number?.message}
                
                />
                <InputField 
                    // disabled
                    // fieldClass=""
                    // inputClass=""
                    id="password"
                    label="Password:"
                    type="password"
                    placeholder="Password"
                    { ...register("password") }
                    errors={errors.password?.message}
                />
                <Button 
                    // onClick={}
                    type="submit"
                    children= "Edit"
                />
            </form>
        </StyledSection>
    )
}
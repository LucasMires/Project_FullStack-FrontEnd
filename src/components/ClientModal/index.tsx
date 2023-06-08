import { StyledSection } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { IUpdatedClientData, schema } from "./validator"
import { InputField } from "../Input"
import { Button } from "../Button"
import { ContextsProps } from "../../hooks/ContextsProps"


export const ClientModal = () => {
    const {
        authProps: { clientInfo, updateClient },
        contactProps:{ closeModals }
    } = ContextsProps()

    const { register, handleSubmit, formState:{ errors } } = useForm<IUpdatedClientData>({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues: clientInfo
    })


    const serializerData = async (data: IUpdatedClientData) => {
        const newData: any = {}

        const dataKeys = Object.keys(data)
        const dataValues = Object.values(data)
        
        dataKeys.forEach((element, index) => {
            if (dataValues[index] !== "") {
                newData[element] = dataValues[index]
            }
        })

        if (Object.keys(newData).length == 0) {
            return
        }
        updateClient(clientInfo.id, newData)
        closeModals()
    }

    return (
        <StyledSection>
            <form onSubmit={ handleSubmit(serializerData) }>
                <InputField 
                    id="name"
                    label="Name:"
                    type="text"
                    placeholder="Name"
                    { ...register("name") }
                    errors={errors.name?.message}
                
                />
                <InputField 
                    id="email"
                    label="Email:"
                    type="email"
                    placeholder="Email"
                    { ...register("email") }
                    errors={errors.email?.message}
                
                />
                <InputField 
                    id="Phone Number"
                    label="Phone Number:"
                    type="text"
                    placeholder="Phone Number"
                    { ...register("phone_number") }
                    errors={errors.phone_number?.message}
                
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
                    children= "Edit"
                    className="updateButton"
                />
            </form>
        </StyledSection>
    )
}

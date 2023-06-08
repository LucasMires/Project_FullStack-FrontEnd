import { useForm } from "react-hook-form"
import { InputField } from "../Input"
import { StyledSection } from "./style"
import { IAddContactData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContextsProps } from "../../hooks/ContextsProps"
import { Button } from "../Button"

export const AddContactModal = () => {
    const {
        contactProps:{
            closeModals,
            createContact
        }
    } = ContextsProps()

    const { register, handleSubmit, formState:{ errors } } = useForm<IAddContactData>({
        resolver: zodResolver(schema),
        mode: "onBlur",
    })

    const handleEvent = (data: IAddContactData) => {
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
        createContact(newData)
        closeModals()
    }

    return (
        <StyledSection>
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit(handleEvent)}>
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

                <div>
                    <Button
                        type="submit"
                        children="Register Contact"
                        className="sucessButton"
                    />
                    <Button
                        type="button"
                        children="Delete"
                        onClick={closeModals}
                        className="deleteButton"
                    />
                </div>
            </form>

        </StyledSection>
    )
}

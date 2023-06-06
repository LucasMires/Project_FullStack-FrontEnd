import { useForm } from "react-hook-form"
import { InputField } from "../Input"
import { StyledSection } from "./style"
import { IUpdatedContactData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContextsProps } from "../../hooks/ContextsProps"
import { Button } from "../Button"

export const ContactModal = () => {
    const {
        contactProps:{
            closeModals,
            updateContact,
            deleteContact,
            activeContact,
        }
    } = ContextsProps()

    const { register, handleSubmit, formState:{ errors } } = useForm<IUpdatedContactData>({
        resolver: zodResolver(schema),
        mode: "onBlur",
        defaultValues: activeContact
    })

    const serializerData = async (data: IUpdatedContactData) => {
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
        
        updateContact(activeContact.id, newObject)
        closeModals()
    }

    const removeContact = () => {
        deleteContact(activeContact.id)
        closeModals()
    }

    return (
        <StyledSection>
            <form onSubmit={handleSubmit(serializerData)}>
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

                <div>
                    <Button
                        type="submit"
                        children="Edit Contact"
                    />
                    <Button
                        type="button"
                        children="Delete"
                        onClick={removeContact}
                    />
                </div>
            </form>

        </StyledSection>
    )
}
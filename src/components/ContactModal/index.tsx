import { useForm } from "react-hook-form"
import { InputField } from "../Input"
import { StyledSection } from "./style"
import { IUpdatedContactData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContextsProps } from "../../hooks/ContextsProps"
import { Button } from "../Button"
import { toast } from "react-toastify";


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
        const newData: any | IUpdatedContactData = {}

        const dataKeys = Object.keys(data)
        const dataValues = Object.values(data)

        dataKeys.forEach((element, index) => {
            if (dataValues[index] !== "") {
                newData[element] = dataValues[index]
            }
        })

        if (Object.keys(newData).length == 0) {
            toast.info("Invalid Information")
            return
        }
        updateContact(activeContact.id, newData)
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
                    <p>Registered in: {activeContact.created_at.slice(0,10)}</p>
                    <Button
                        type="submit"
                        children="Edit Contact"
                        className="updateButton"
                    />
                    <Button
                        type="button"
                        children="Delete"
                        onClick={removeContact}
                        className="deleteButton"
                    />
                </div>
            </form>

        </StyledSection>
    )
}

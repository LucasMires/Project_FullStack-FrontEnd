import { forwardRef, InputHTMLAttributes } from "react"
import { StlyedField } from "./style"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    errors?: string
    fieldClass?: string
    inputClass?: string
    name?: string
}

export const InputField = forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, type, placeholder, fieldClass, inputClass, disabled, errors, onChange, name, ...rest}, ref) => {

        return (
            <StlyedField className={ fieldClass }>
                <label htmlFor={ id }>{ label }</label>
                <input
                id= { id }
                type= { type } 
                placeholder= { placeholder }
                disabled= { disabled }
                className= { errors ? "ErrorBorder": inputClass }
                onChange= { onChange }
                ref= { ref }
                name= { name }
                { ...rest }
                />
                { errors !== undefined && <p>{ errors }</p> }
            </StlyedField>
        )

})

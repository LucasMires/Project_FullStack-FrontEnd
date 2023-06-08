import { forwardRef, InputHTMLAttributes } from "react"
import { StyledField } from "../../styles/InputStyles" 

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
            <StyledField className={ fieldClass }>
                <label htmlFor={ id }>{ label }</label>
                <input
                id= { id }
                type= { type } 
                placeholder= { placeholder }
                disabled= { disabled }
                className= { errors ? "errorBorder": inputClass }
                onChange= { onChange }
                ref= { ref }
                name= { name }
                { ...rest }
                />
                {
                errors !== undefined && 
                <p className="errorWarning">
                    { errors }
                </p>
                    }
            </StyledField>
        )
})

import React from "react"
import { StyledButton } from "./style"

interface IButtonProps {
    children?: React.ReactNode
    type: "button" | "submit" | "reset" | undefined
    disabled?: boolean
    className?: string 
    onClick?: () => void
}

export const Button = ({ children, type, disabled, className, onClick }:IButtonProps) => {
    return (
        <StyledButton
            type={ type }
            disabled={ disabled }
            className={ className }
            onClick={ onClick }
        >
            { children }
        </StyledButton>
    )
}
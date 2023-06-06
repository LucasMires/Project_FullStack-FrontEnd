import { useEffect, useRef } from "react"
import { Container } from "./style"
import { createPortal } from "react-dom"
import { Button } from "../Button"
import { ContextsProps } from "../../hooks/ContextsProps"


interface IBaseModal {
    children: React.ReactNode
}

export const BaseModal = ({ children }: IBaseModal) => {
    const ref = useRef<HTMLDivElement>(null)
    const { contactProps: {closeModals} } = ContextsProps()

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current) {
                return
            }

            if (!event.target) {
                return
            }
            if (!ref.current.contains(event.target as HTMLElement)) {
                closeModals()
            }
        }

        window.addEventListener("mousedown", handleClick)
        return () => {
            window.removeEventListener("mousedown", handleClick)
        }
    }, [closeModals])

    return createPortal(
        <Container>
            <div ref={ref}>
                {children}
                <Button
                    className="closeModal"
                    type="button"
                    onClick={closeModals}
                    children="X"
                />
            </div>
        </Container>,
        document.body
    )
}

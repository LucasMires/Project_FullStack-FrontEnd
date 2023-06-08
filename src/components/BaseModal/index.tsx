import { useEffect, useRef } from "react"
import { Container } from "./style"
import { createPortal } from "react-dom"
import { ContextsProps } from "../../hooks/ContextsProps"
import { GrClose } from "react-icons/gr"


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
                <figure 
                    className="closeModal"
                    onClick={closeModals}
                >
                    <GrClose />
                </figure>
            </div>
        </Container>,
        document.body
    )
}

import { ContextsProps } from "../../hooks/ContextsProps"
import { Button } from "../Button"
import { StyledSection } from "./style"

export const WarningModal = () => {
    const {
        contactProps:{ closeModals },
        authProps: { deleteClient, clientInfo }
    } = ContextsProps()

    const deleteAccount = () => {
        deleteClient(clientInfo.id)
        closeModals()
    }

    return (
        <StyledSection>
            <h2>Are you sure to delete your account?</h2>
            <div>
                <Button
                    type="button"
                    children="Yes"
                    onClick={deleteAccount}
                    className="deleteButton"

                />
                <Button
                    type="button"
                    children="Cancel"
                    onClick={closeModals}
                    className="sucessButton"
                />
            </div>

        </StyledSection>
    )
}

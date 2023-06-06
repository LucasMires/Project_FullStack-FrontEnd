import { Button } from "../Button"
import { StyledArticle } from "./style"
import { ContextsProps } from "../../hooks/ContextsProps" 
import { IClientData } from "../RegisterForm/validator"

export interface IUserInfoProps {
    userInfo: IClientData
}

export const CardClient = () => {

    const {
        authProps:{ clientInfo },
        contactProps:{ callClientModal, callWarningModal }
    } = ContextsProps()


    return (
        <StyledArticle>
            <h2>Client: {clientInfo.name}</h2>

            <div className="div-client-info">
                <p>Email: { clientInfo.email }</p>
                <p>Phone Number: { clientInfo.phone_number }</p>
                <p>Registered In: { clientInfo.created_at?.slice(0, 10) }</p>
            </div>

            <div className="div-client-buttons">
                <Button 
                    type="button"
                    children="Change Information"
                    onClick={ callClientModal }
                />

                <Button 
                    type="button"
                    children="Delete Account"
                    onClick={callWarningModal}
                />
            </div>

        </StyledArticle>
    )
}

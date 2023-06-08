import { Button } from "../Button"
import { StyledArticle } from "./style"
import { ContextsProps } from "../../hooks/ContextsProps" 
import { IClientData } from "../RegisterForm/validator"

export interface IUserInfoProps {
    userInfo: IClientData
}

export const ClientCard = () => {

    const {
        authProps:{ clientInfo },
        contactProps:{ callClientModal, callWarningModal }
    } = ContextsProps()


    return (
        <StyledArticle>

            <div className="div-client-info">
                <p>Client: { clientInfo.name }</p>
                <p>Email: { clientInfo.email }</p>
                <p>Number: { clientInfo.phone_number }</p>
                <p>Registered in: { clientInfo.created_at?.slice(0, 10) }</p>
            </div>

            <div className="div-client-buttons">
                <Button 
                    type="button"
                    children="Change Information"
                    onClick={ callClientModal }
                    className="brandButton2"
                />

                <Button 
                    type="button"
                    children="Delete Account"
                    onClick={callWarningModal}
                    className="brandButton2"
                />
            </div>

        </StyledArticle>
    )
}

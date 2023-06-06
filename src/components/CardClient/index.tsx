import { StyledArticle } from "./style"
import { IUpdatedClientData } from "./validator"

interface IUseInfoProps {
    userInfo: IUpdatedClientData
}

export const CardClient = ({ userInfo } : IUseInfoProps) => {

    return (
        <StyledArticle>
            <h2>Name: {userInfo.name}</h2>
            {/* Finish the Client Card */}
        </StyledArticle>
    )
}

import { Button } from "../Button"
import { StyledHeader } from "./style"
import pageLogo from "../../assets/sv-contact-logo.svg"
import { ContextsProps } from "../../hooks/ContextsProps"

export const Header = () => {
    const {contactProps:{logout}} = ContextsProps()

    return (
        <StyledHeader>
            <figure>
                <img src={pageLogo} alt="Simple Viewer Contacts logo"  />
                <h2>SW Contacts</h2>
            </figure>

            <Button 
                type="button"
                children="Logout"
                onClick={logout}
                className="brandButton1"
            />
        </StyledHeader>
    )
}

import { styled } from "styled-components";


export const StyledMain = styled.main`
    max-width: 100%;

    border: 1px solid var(--color-gray500);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-left: var(--space-2);
    padding-right: var(--space-2);
    

    .userInfo_section {
        margin-top: var(--space-3);
    }
    
    .contacts_section {
        max-width: 100%;
        width: 420px;
        padding: 1rem;

        display: flex;
        flex-direction: column;

        margin-top: var(--space-3);
        border: 1px solid var(--color-gray200);
    }

    .contacts_section > ul {
        max-width: 100%;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-self: center;
    }

`
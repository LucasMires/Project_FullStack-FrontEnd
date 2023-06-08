import { styled } from "styled-components";

export const StyledSection = styled.section`
    max-width: 100%;
    width: 30rem;
    
    display: flex;
    flex-direction: column;
    
    gap: var(--gap1);
    
    border-radius: 1rem;
 
    & > form {
        display: flex;
        flex-direction: column;
        gap: var(--gap1);
    }

    & > form > div {
        display: flex;
        flex-direction: column;
        gap: var(--gap0);
    }

    & > form > div > button {
        width: 50%;
        align-self: center;
        padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    }


    & > form > div > p {
        margin-top: var(--space1);
        text-align: end;
    }
`

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
    
    & > form > button{
        align-self: center;
        font-size: var(--text3);
        padding: 1rem 2rem 1rem 2rem;
    }
`

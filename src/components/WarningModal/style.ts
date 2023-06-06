import { styled } from "styled-components";

export const StyledSection = styled.section`
    max-width: 100%;

    width: 30rem;
    
    display: flex;
    flex-direction: column;
    
    gap: var(--gap-1);
    
    border-radius: 1rem;
    background-color: var(--color-gray100);
    
    & > form {
        display: flex;
        flex-direction: column;
        gap: var(--gap-1);

        padding: 1rem;
    }

`
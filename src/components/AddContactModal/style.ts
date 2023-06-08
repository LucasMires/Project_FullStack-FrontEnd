import styled from "styled-components"

export const StyledSection = styled.section`
    max-width: 100%;
    width: 30rem;
    
    display: flex;
    flex-direction: column;
    gap: var(--gap1);
    
    border-radius: 1rem;

    & > h2 {
        font-size: var(--title2);
        font-weight: var(--fontWeigth2);
    }
    
    & > form {
        display: flex;
        flex-direction: column;
        gap: var(--gap1);

        height: 100%;
    }
    
    & > form > div{
        width: 45%;
     
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-self: center;

        gap: 1rem;
    }

    & > form > div > button{
        font-size: var(--text3);
        padding: 0.5rem 0.5rem 0.5rem 0.7rem;
    }
`

import { styled } from "styled-components";

export const StyledSection = styled.section`
    max-width: 100%;

    width: 450px;
    height: 160px;

    display: flex;
    flex-direction: column;
    gap: var(--gap1);

    justify-content: center;
    align-items: center;
    
    border-radius: 1rem;

    & > h2 {
        font-size: var(--title3);
        font-weight: var(--fontWeigth2);
    }

    & > div {
        margin-top: var(--space1);
        display: flex;
        gap: var(--gap1);
    }

    & > div > button{
        font-size: var(--text4);
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
`

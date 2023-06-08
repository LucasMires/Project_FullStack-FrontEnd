import styled from "styled-components"

export const StyledCard = styled.li`
    max-width: 400px;
    width: 47%;
    height: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: var(--gap1);

    color: var(--color-gray0);
    background-color: var(--color-brand2);

    border: 1px solid transparent;
    border-radius: 0.5rem;
    
    transition: 0.4s;

    cursor: pointer;

    & > h2{
        font-size: var(--text4);
        font-weight: var(--fontWeigth2);
    }

    &:hover {
        color: var(--color-gray0);
        background-color: var(--color-blue0);
    }
`

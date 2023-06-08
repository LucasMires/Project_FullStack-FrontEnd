import { styled } from "styled-components";

export const StyledHeader = styled.header`
    max-width: 100%;
    max-height: 4rem;
    width: 100%;
    height: 5rem;

    position: fixed;
    top: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 35%;
    
    background-color: var(--color-brand1);
    box-shadow: 0px 3px 47px 20px rgba(0,0,0,0.09);

    & > figure {
        display: flex;
        align-items: center;
        gap: var(--gap0);
    }

    & > figure > img {
        width: 3rem;
        max-width: 2.5rem;
    }

    & > figure > h2 {
        color: var(--color-white);
        font-size: var(--title2);
    }

    & > button {
        padding: 0.5rem;
    }
`

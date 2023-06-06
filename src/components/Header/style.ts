import { styled } from "styled-components";

export const StyledHeader = styled.header`
    max-width: 100%;
    height: 3rem;
    max-height: 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: var(--space-1) var(--space-1) var(--space-1) var(--space-1);

    & > figure {
        /* max-width: rem; */
        display: flex;
        align-items: center;
        gap: var(--gap-1);
    }
    & > figure > img {
        width: 3rem;
        max-width: 2.5rem;
    }

`
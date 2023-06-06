import { styled } from "styled-components";

export const StyledArticle = styled.article`
    /* width: ; */
    max-width: 450px;
    max-height: 250px;
    width: 100%;
    height: 600px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    border: 1px solid var(--color-gray600);

    .div-client-info {
        width: 50%;

        display: flex;
        flex-wrap:wrap;
        gap: var(--gap-1);
    }

    .div-client-buttons {
        display: flex;
        gap: var(--gap-1);
    }

`
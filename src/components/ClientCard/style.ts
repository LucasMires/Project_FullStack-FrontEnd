import { styled } from "styled-components";

export const StyledArticle = styled.article`
    max-width: 500px;
    width: 100%;

    padding-top: 1rem;
    padding-bottom: 1rem;

    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    margin-top: var(--space4);

    border-radius: 1rem;
    background-color: var(--color-brand1);
    box-shadow: 0px -4px 47px -5px rgba(0,0,0,0.20);

    .div-client-info {
        width: 60%;
        display: flex;
        flex-wrap:wrap;
        padding: 0.5rem;
        gap: var(--gap3);
        font-size: var(--text4);
        font-weight: var(--fontWeigth2);
    }

    .div-client-info > div {
        display: flex;
        flex-direction: column;
    }

    .div-client-info > p {
        color: var(--color-gray0);
    }

    .div-client-buttons {
        display: flex;
        flex-direction: column;
        gap: var(--gap1);
    }

    .div-client-buttons > button{
        font-size: var(--text3);
        padding: 0.5rem;
    }

`

import styled from "styled-components"

export const StyledForm = styled.form`
    max-width: 90%;

    display: flex;
    flex-direction: column;
    gap: var(--gap1);
    
    box-shadow: 0px -4px 47px -5px rgba(0,0,0,0.20);
    border: 1px solid var(--color-gray300);
    border-radius: 1rem;
    padding: 1.5rem;

    animation: showLoginForm 0.5s;

    @keyframes showLoginForm {
        0% {
            transform: scale(3);
            opacity: 0%;
            
        }
    }

    & > h2 {
        font-size: var(--title2);
        font-weight: var(--fontWeigth2);
    }

    &> div {
        display: flex;
        gap: var(--gap1);
    }

    &> div > a {
        font-size: var(--text3);
        text-decoration: none;
        border: 2px solid transparent;

        padding: 0.5rem 0.5rem 0.5rem 0.7rem;
        border-radius: 1rem;

        color: var(--color-gray0);
        background-color: var(--color-brand2);

        transition: 0.5s;

        &:hover{
            color: var(--color-brand2);
            background-color: var(--color-white);
            border: 2px solid var(--color-brand2);;
        }
    }

    & > fieldset > input {
        padding: 0.5rem;
    }

    & > button {
        width: 50%;
        align-self: center;
        padding: 0.5rem;
        font-size: var(--text3);
    }

    & > p {
        font-weight: var(--fontWeigth1);
    }

    & > p > a {
        font-weight: var(--fontWeigth3);
        text-decoration: none;
        color: var(--color-brand2);

        &:hover{
            color: var(--color-brand2);
            background-color: var(--color-white);
            border: 2px solid var(--color-brand2);;
        }
    }
`

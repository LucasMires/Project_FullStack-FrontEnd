import { styled } from "styled-components";

export const StyledField = styled.fieldset `
    
    display: flex;
    flex-direction: column;
    gap: var(--space1);
    

    & > label {
        font-size: var(--title2);
        font-weight: var(--fontWeigth2);
        color: var(--color-black0);
    }

    & > input {
        width: 90%;
        border-radius: 0.5rem;

        outline: none;
        border: transparent;
        background-color: var(--color-gray200);
        padding: 1rem ;

        font-size: var(--title2);
        font-weight: var(--fontWeigth3);

        border: 2px solid var(--color-gray400);
        transition: 0.5s;
        
    }

    & > input::placeholder {
        border: 1px solid transparent;
        font-weight: var(--fontWeigth2);

    }

    & > p {
        color: var(--color-red0);
        font-size: var(--text4);
        font-weight: var(--fontWeigth3);

        animation: showError 0.5s;
    }
    
    @keyframes showError {
        0% {
            transform: translateX(-100%);
        }
    }

    .errorBorder {
        font-size: var(--title2);
        font-weight: var(--fontWeigth3);

        border: 2px solid var(--color-red0);
        border-radius: 0.3rem;

        transition: 0.5s;
    }


    &>input:focus {
        border: 2px solid var(--color-black0);
        background-color: var(--color-white);
    }
`

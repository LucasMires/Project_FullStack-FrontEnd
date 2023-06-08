import { styled, css } from "styled-components";

export const StyledButton = styled.button `
    font-size: 0.9rem;
    font-weight: var(--fontWeigth2);

    border-radius: 0.5rem;
    border-color: transparent;

    transition: 0.4s;

    cursor: pointer;

    ${({ className }) => {
        switch (className) {
            case "brandButton1":
                return css`
                    color: var(--color-gray0);
                    background-color: var(--color-brand2);
                    border: 2px solid transparent;
                    &:hover{
                        color: var(--color-brand2);
                        background-color: var(--color-white);
                        border: 2px solid var(--color-brand2);;
                    }
                `
            case "brandButton2":
                return css`
                    color: var(--color-gray600);
                    background-color: var(--color-white);
                    border: 2px solid var(--color-gray500);
                    
                    &:hover{
                        color: var(--color-gray0);
                        background-color: var(--color-gray600);
                        border: 2px solid transparent;

                    }
                `
            case "updateButton":
                return css`
                    color: var(--color-gray0);
                    background-color: var(--color-orange0);
                    &:hover{
                        color: var(--color-gray0);
                        background-color: var(--color-gray600);

                    }
                `
            case "deleteButton":
                return css`
                    color: var(--color-white);
                    background-color: var(--color-red0);
                    &:hover{
                        color: var(--color-gray0);
                        background-color: var(--color-red100);
                    }
                `
            case "sucessButton":
                return css`
                    color: var(--color-white);
                    background-color: var(--color-green0);
                    &:hover{
                        color: var(--color-gray0);
                        background-color: var(--color-green100);
                    }
                `

        }
    }}
`

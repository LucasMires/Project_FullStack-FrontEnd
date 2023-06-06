import { styled } from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;

    background-color: var(--bg-color-backDrop);
    
    position: fixed;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    & > div{
        position: relative;
        max-width: 90%;
    }

    & > div > .closeModal {
        position: absolute;
        top: 4%;
        right: 2%;
    }

    .closeModal {
        border-radius: 0.5rem;
    }

`
import { styled } from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    
    position: fixed;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--bg-color-backDrop);

    & > div{
        max-width: 85%;
        padding: 1rem;
        position: relative;
        
        background-color: var(--color-gray0);
        border-radius: 1rem;

        animation: showModal 0.5s;
    }

    & > div > .closeModal {
        position: absolute;
        top: 3%;
        right: 1%;
    }

    .closeModal > svg{
        width: 2rem;
        height: 1.3rem;
        cursor: pointer;
    }

    @keyframes showModal {
        0% {
            transform: translateY(-100vh);}
    }
`

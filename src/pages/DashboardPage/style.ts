import { styled } from "styled-components";


export const StyledMain = styled.main`
    max-width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding-left: var(--space2);
    padding-right: var(--space2);
    
    margin-top: var(--space9);
    margin-bottom: var(--space6);

    @media (min-width: 750px) {
        flex-direction: row;

        margin-top: var(--space9);
        justify-content: center;
        gap: 2rem;
    }

    .userInfo_section {
        margin-top: var(--space3);
    }

    @media (min-width: 700px) {
        .userInfo_section {
            display: flex;
            flex-direction: column;
            gap: var(--gap4);
        }
    }


    .userInfo_section > h2 {
        font-size: var(--title3);
        font-weight: var(--fontWeigth2);
    }
    
    .contacts_section {
        max-width: 90%;
        width: 500px;
        padding: 1rem;

        display: flex;
        flex-direction: column;

        margin-top: var(--space3);
    }
    
    .contacts_section > h2 {
        font-size: var(--title3);
        font-weight: var(--fontWeigth2);
    }
    
    .contacts_section > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1%;
        
        margin-top: var(--space2);
    }

    @media (max-width: 410px) {
        .contacts_section > div{
            flex-direction: column;
            gap: var(--gap1);
        }
    }

    
    .contacts_section > div > input {
        width: 50%;
        border-radius: 0.5rem;

        outline: none;
        border: transparent;
        background-color: var(--color-gray200);
        padding: 1rem ;

        font-size: var(--text5);
        font-weight: var(--fontWeigth3);

        border: 2px solid var(--color-gray400);
        transition: 0.5s;
    }

    .contacts_section > div > input::placeholder {
        color: var(--color-blac);
        border: 1px solid transparent;
    }

    .contacts_section > div > input:focus {
        border: 2px solid var(--color-black0);
        background-color: var(--color-white);
    }

    .contacts_section > div > button {
        padding: 0.5rem 1rem 0.5rem 1rem;
        font-size: var(--text4);
        font-weight: var(--fontWeigth2);
    }

    .contacts_section > ul {
        max-width: 100%;
        width: 400px;
        
        margin-top: var(--space5);

        display: flex;
        align-self: center;
        justify-self: center;

        gap: var(--gap1);

        justify-content: center;
        flex-wrap: wrap;
    }
`

import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input:first-child {
        max-width: 12.5rem;
    }

    div {
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 1000px) {
        width: 100%;
        div {
            flex-direction: column;
        }
    }
`;
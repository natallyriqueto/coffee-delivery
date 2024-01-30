import styled from "styled-components";

export const CoffeeListContainer = styled.div`
    padding: 2rem 10rem;
    margin-bottom: 2rem;
    max-width: 90rem;
    margin: 0 auto; 

    h2 {
        font-family: ${props => props.theme.typography.title.fontFamily};
        font-size: ${props => props.theme.typography.title.fontSize.large};
        color: ${props => props.theme.base.subtitle};
    }

    @media (max-width: 650px) {
        padding: 0 2rem;
    } 
`;

export const CoffeeListContent = styled.div`
    margin-top: 3.37rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    @media (max-width: 650px) {
        gap: 1rem;
    } 
`;
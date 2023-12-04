import styled from "styled-components";


export const HeaderContainer = styled.header`
    padding: 2rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 5rem;
        height: 2.5rem;
    }

    @media (max-width: 650px) {
        padding: 2rem;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const Cart = styled.div`
    display: flex;
    background: ${props => props.theme['yellow-light']};
    border-radius: 6px;
    padding: 0.5rem;
`;

export const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.6rem 0.5rem;
    border-radius: 6px;

    color: ${props => props.theme.purple};
    background: ${props => props.theme['purple-light']};
    
    font-size: ${props => props.theme.typography.text.fontSize.small};
`;


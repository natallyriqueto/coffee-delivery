import styled from "styled-components";

export const SuccessContainer = styled.div`
    padding: 5rem 10rem;

    img {
        width: 100%; 
        max-width: 500px; 
        height: auto; 
        text-align: center;

    }
    
    h1 {
        font-weight: 800;
        color: ${props => props.theme['yellow-dark']};
        font-family: ${props => props.theme.typography.title.fontFamily};
        font-size: ${props => props.theme.typography.title.fontSize.large};
    }

    h2 {
        color: ${props => props.theme.base.subtitle};
        font-size: ${props => props.theme.typography.text.fontSize.medium};
        font-weight: 400;
    }

    @media (max-width: 650px) {
        padding: 2rem;
    }

    @media (max-width: 1000px) {
        img {
            display: none;
        }
    }

`;

export const OrderConfirmationContent = styled.div`
    display: flex;
    align-items: center;
    gap: 6.3rem;
    margin-top: 2.5rem;

    @media (max-width: 1000px) {
        gap: 0;
    }
`;

export const OrderDetails = styled.div`
    max-width: 32rem;
    height: 270px;
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid ${props => props.theme['purple']};
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`;

export const OrderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    p, strong {
        color: ${props => props.theme.base.text};
    }
`;

export const IMGContainer = styled.div`
`;
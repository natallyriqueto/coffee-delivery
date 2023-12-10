import styled from "styled-components";

export const SuccessContainer = styled.div`
    padding: 2rem 10rem;
    
    h1 {
        color: ${props => props.theme['yellow-dark']};
        font-family: ${props => props.theme.typography.title.fontFamily};
        font-size: ${props => props.theme.typography.title.fontSize.large};
    }

    h2 {
        color: ${props => props.theme.base.subtitle};
        font-size: ${props => props.theme.typography.text.fontSize.large};
        font-weight: 400;
    }

    @media (max-width: 650px) {
        padding: 2rem;
    }
`;

export const OrderConfirmationContent = styled.div`
    display: flex;
    gap: 6.3rem;
    margin-top: 2.5rem;
`;

export const OrderDetails = styled.div`
    min-width: 32rem;
    position: relative;
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid ${props => props.theme['purple']};
`;

export const OrderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    margin-bottom: 2rem;
`;

import styled from "styled-components";

export const CheckoutTitle = styled.h2`
    color: ${props => props.theme.base.subtitle};
    font-family: ${props => props.theme.typography.title.fontFamily};
    font-size: ${props => props.theme.typography.title.fontSize.xsmall};
`;

export const CheckoutContainer = styled.div`
    padding: 2.5rem 9rem;
    max-width: 90rem;
    margin: 0 auto; 
    height: 100vh;
    
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: space-between;

    @media (max-width: 650px) {
        padding: 2rem;
    }

    @media (max-width: 1400px) {
        gap: 2rem;
    }
`;

export const CheckoutContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 40rem;
`;

export const Card = styled.div`
    background-color: ${props => props.theme.base.card};
    border-radius: 6px;
    padding: 2.5rem;
`;

export const OrderContent = styled.div`
    background-color: ${props => props.theme.base.card};
    border-radius: 6px 44px 6px 44px;
    padding: 2.5rem;
`;

export const OrderCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-width: 28rem;
`;

export const OrderItem = styled.div`
    display: flex;
    flex-direction: column;

    > div {
        border-bottom: 1px solid ${props => props.theme.base.button};
        display: flex;
        gap: 3rem;
        padding: 1.5rem 0;
    }

    strong {
        color: ${props => props.theme.base.text};
    }
`

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > div {
        display: flex;
        gap: 0.5rem;
    }
`;

export const OrderInfo = styled.div`
    display: flex;
    gap: 1.25rem;

    img {
        height: 4rem;
        width: 4rem;
    }
`;

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.2rem;

    cursor: pointer;
    padding: 0.5rem;
    border: none;
    border-radius: 6px;

    color: ${props => props.theme.base.text};
    background-color: ${props => props.theme.base.button};

    text-transform: uppercase;
    font-size: ${props => props.theme.typography.text.fontSize.small};

    svg {
        color: ${props => props.theme['purple']};
    }
`;

export const OrderQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    background-color: ${props => props.theme.base.button};
    border-radius: 6px;
    cursor: pointer;

    width: 72px;
    height: 38px;
    
    span {
        font-size: ${props => props.theme.typography.text.fontSize.medium};
    }
`;

export const TotalPrice = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    margin: 1.5rem 0;

    span:nth-child(even) {
        text-align: right;
    }

    h3:nth-child(even) {
        text-align: right;
    }
`;

export const ConfirmButton = styled.button`
    color: white;
    background-color: ${props => props.theme['yellow']};
    border-radius: 6px;
    border: none;
    padding: 0.75rem;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme['yellow-dark']};
    }
`;


import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutContainer = styled.div`
    padding: 2.5rem 10rem;

    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    h2 {
        color: ${props => props.theme.base.subtitle};
        font-family: ${props => props.theme.typography.title.fontFamily};
        font-size: ${props => props.theme.typography.title.fontSize.xsmall};
        margin-bottom: 0.9rem;
    }

    @media (max-width: 650px) {
        padding: 2rem;
    }
`;

export const CheckoutContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const Card = styled.div`
    background-color: ${props => props.theme.base.card};
    border-radius: 6px;
    padding: 2.5rem;
`;

export const OrderContent = styled.div`
    background-color: ${props => props.theme.base.card};
    border-radius: 6px 44px 6px 44px;
`;

export const OrderCart = styled.div`
`;

export const PaymentType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-top: 2rem;
`;

interface PaymentTypeButtonProps {
    variant: "credito" | "debito" | "dinheiro";
}

export const PaymentTypeButton = styled(RadioGroup.Item)<PaymentTypeButtonProps>`
    background-color: ${props => props.theme.base.button};
    color: ${props => props.theme.base.text};
    font-size: ${props => props.theme.typography.text.fontSize.small};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;
    border: 0;

    svg {
        color: ${props => props.theme['purple']};
    }

    &[data-state='checked'] {
        border: 1px solid ${props => props.theme['purple']};
        background-color: ${props => props.theme['purple-light']};
    }

    &[data-state='unchecked']:hover {
        border: 1px solid ${props => props.theme['purple']};
        transition: background-color 0.2s;
        background: ${props => props.theme['purple-light']};
    }
`;

export const CartListItems = styled.div`
    display: flex;
    
`;
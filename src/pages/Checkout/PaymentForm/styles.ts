import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const PaymentType = styled(RadioGroup.Root)`
    display: grid;
    gap: 0.75rem;
    margin-top: 2rem;

    @media(min-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
    }
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
    border: 1px solid ${props => props.theme.base.button};

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
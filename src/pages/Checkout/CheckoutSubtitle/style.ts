import styled from "styled-components";

export const CheckoutSubTitle = styled.div`
    display: flex;
    gap: 0.5rem;

    h3 {
        font-weight: 400;
        color: ${props => props.theme.base.subtitle};
        font-size: ${props => props.theme.typography.text.fontSize.medium};
    }

    p {
        color: ${props => props.theme.base.text};
        font-size: ${props => props.theme.typography.text.fontSize.small};
    }
`;
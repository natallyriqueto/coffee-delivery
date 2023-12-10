import styled from "styled-components";

export const AdvContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
        font-size: ${props => props.theme.typography.text.fontSize.medium};
        color: ${props => props.theme.base.text};
    }
`;

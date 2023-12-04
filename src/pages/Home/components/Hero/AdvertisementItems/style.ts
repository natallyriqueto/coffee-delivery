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

interface IconProps {
    backgroundcolor: string;
}

export const IconContent = styled.div<IconProps>`
    background-color: ${props => props.backgroundcolor};
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
`;
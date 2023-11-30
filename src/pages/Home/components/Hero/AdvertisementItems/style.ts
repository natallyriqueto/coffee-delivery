import styled from "styled-components";

export const AdvContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
        font-family: ${props => props.theme.typography.text.fontFamily};
        font-size: ${props => props.theme.typography.text.fontSize.medium};
        color: ${props => props.theme.base.text};
    }
`;

interface IconProps {
    backgroundColor: string;
}

export const IconContent = styled.div<IconProps>`
    background-color: ${props => props.backgroundColor};
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
`;
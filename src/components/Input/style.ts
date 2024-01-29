import styled from "styled-components";


export const InputContent = styled.input`
    padding: 0.75rem;
    background-color: ${props => props.theme.base.input};
    border: 1px solid ${props => props.theme.base.button};
    border-radius: 4px;
    font-size: ${props => props.theme.typography.text.fontSize.small};
    color: ${props => props.theme.base.label};
`;

export const InputSelectContent = styled.select`
    padding: 0.75rem;
    background-color: ${props => props.theme.base.input};
    border: 1px solid ${props => props.theme.base.button};
    border-radius: 4px;
    font-size: ${props => props.theme.typography.text.fontSize.small};
    color: ${props => props.theme.base.label};
`;
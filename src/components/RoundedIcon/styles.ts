import styled from "styled-components";


interface IconProps {
    backgroundcolor: string;
}

export const IconContent = styled.div<IconProps>`
    background-color: ${props => props.backgroundcolor};
    border-radius: 50%;
    padding: 0.5rem;
    display: flex;
`;
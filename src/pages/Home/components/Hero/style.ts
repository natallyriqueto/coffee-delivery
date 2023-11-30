import styled from "styled-components";
import backgroundImage from "@/assets/images/background.png"

export const HeroContainer = styled.div`
    padding: 5.8rem 10rem;

    background-image: url(${backgroundImage});
    background-size: cover;

    display: flex;
    justify-content: space-between;
    
    img {
        width: 476px;
        height: 360px;
    }
`;

export const HeroContent = styled.div`
    max-width: 36rem;
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.typography.title.fontFamily};
    font-size: ${props => props.theme.typography.title.fontSize.xlarge};
    color: ${props => props.theme.base.title};
    font-weight: 800;
`;

export const SubTitle = styled.p`
    font-family: ${props => props.theme.typography.text.fontFamily};
    font-size: ${props => props.theme.typography.text.fontSize.large};
    color: ${props => props.theme.base.subtitle};
`;

export const Items = styled.div`
    padding: 4rem 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
`;
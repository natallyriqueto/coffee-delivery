import styled from "styled-components";


export const CoffeeItemContainer = styled.div`
    background-color: ${props => props.theme.base.card};
    border-radius: 6px 36px 6px 36px;

    max-width: 16rem;
    min-height: 19rem;
    padding: 0 1.5rem  1.5rem 1.5rem;
    text-align: center;

    @media(max-width: 750px) {
        max-width: 100vw;
        display: flex;
        align-items: center;
        gap: 2rem;
    }
`;


export const CoffeeImage = styled.div`
    height: 7rem;   
    position: relative;
   
    @media(min-width: 750px) {
        img {
            height: 100%;
            position: absolute;
            top: 0;
            transform: translate(-50%, -20%);
        }
    }
`;

export const CoffeeTypeTag = styled.p`
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

export const CoffeeBuy = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CoffeePrice = styled.div`
    display: flex;
    color: ${props => props.theme.base.text};

    strong {
        font-family: ${props => props.theme.typography.title.fontFamily};
        font-size: ${props => props.theme.typography.title.fontSize.medium};
    }
`;

export const CoffeeQuantity = styled.div`
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

export const CoffeeCart = styled.div`
    background-color: ${props => props.theme['purple-dark']};
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;

    svg {
        display: flex;
    }
`;

export const CoffeeActions = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;


export const CoffeTitle = styled.h3`
    font-size: ${props => props.theme.typography.title.fontSize.small};
    font-family: ${props => props.theme.typography.title.fontFamily};
    color: ${props => props.theme.base.subtitle};
    margin-bottom: 0.5rem;
`;

export const CoffeeDescription = styled.p`
    font-size: ${props => props.theme.typography.text.fontSize.small};
    color: ${props => props.theme.base.label};
    margin-bottom: 2rem;
`;

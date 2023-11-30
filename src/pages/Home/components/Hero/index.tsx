import { AdvertisementItems } from "./AdvertisementItems";
import { HeroContainer, HeroContent, Title, SubTitle, Items } from "./style";
import { ShoppingCart, Clock, Package, Coffee } from "phosphor-react";
import coffeeImg from "@/assets/images/hero-coffee.png";

export function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                <Items>
                    <AdvertisementItems bgColor="#C47F17" description="Compra simples e segura" icon={ShoppingCart} />
                    <AdvertisementItems bgColor="#574F4D" description="Embalagem mantém o café intacto" icon={Package} />
                    <AdvertisementItems bgColor="#DBAC2C" description="Entrega rápida e rastreada" icon={Clock} />
                    <AdvertisementItems bgColor="#8047F8" description="O café chega fresquinho até você" icon={Coffee} />
                </Items>
            </HeroContent>
            <img src={coffeeImg} alt="cup of coffee" />
        </HeroContainer>
    )
}
import { AdvertisementItems } from "./AdvertisementItems";
import { HeroContainer, HeroContent, Title, SubTitle, Items } from "./style";
import { ShoppingCart, Clock, Package, Coffee } from "phosphor-react";
import coffeeImg from "@/assets/images/hero-coffee.png";

export function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                <Title>Find the perfect coffee for any time.</Title>
                <SubTitle>With Coffee Delivery you receive your coffee wherever you are, anytime</SubTitle>
                <Items>
                    <AdvertisementItems bgColor="#C47F17" description="Simple and secure purchase" icon={ShoppingCart} />
                    <AdvertisementItems bgColor="#574F4D" description="Packaging keeps the coffee intact" icon={Package} />
                    <AdvertisementItems bgColor="#DBAC2C" description="Fast and tracked delivery" icon={Clock} />
                    <AdvertisementItems bgColor="#8047F8" description="The coffee arrives fresh to you" icon={Coffee} />
                </Items>
            </HeroContent>
            <img src={coffeeImg} alt="cup of coffee" />
        </HeroContainer>
    )
}
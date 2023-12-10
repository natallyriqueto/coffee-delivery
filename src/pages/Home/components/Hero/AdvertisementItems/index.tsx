import { ElementType } from "react";
import { AdvContainer } from "./style";
import { RoundedIcon } from "@/components/RoundedIcon";


interface ItemsProps {
    icon: ElementType;
    bgColor: string;
    description: string;
}

export function AdvertisementItems({description, icon, bgColor}: ItemsProps) {
    return (
        <AdvContainer>
            <RoundedIcon icon={icon} bgColor={bgColor} />
            <span>{description}</span>
        </AdvContainer>
    )
}
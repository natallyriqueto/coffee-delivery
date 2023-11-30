import { ElementType } from "react";
import { AdvContainer, IconContent } from "./style";


interface ItemsProps {
    icon: ElementType;
    bgColor: string;
    description: string;
}

export function AdvertisementItems({description, icon: Icon, bgColor}: ItemsProps) {
    return (
        <AdvContainer>
            <IconContent backgroundColor={bgColor}>
                <Icon size={16} color="#ffff" />
            </IconContent>
            <span>{description}</span>
        </AdvContainer>
    )
}
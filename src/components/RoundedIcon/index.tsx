import { ElementType } from "react";
import { IconContent } from "./styles";

interface ItemsProps {
    icon: ElementType;
    bgColor: string;
}

export function RoundedIcon({icon: Icon, bgColor}: ItemsProps) {
    return (
        <IconContent backgroundcolor={bgColor}>
            <Icon size={16} weight="fill" color="#ffff" />
        </IconContent>
    )
}
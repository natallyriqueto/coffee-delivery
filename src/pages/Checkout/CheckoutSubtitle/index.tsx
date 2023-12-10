import { ElementType } from "react";
import { CheckoutSubTitle } from "./style";

interface CheckoutSubtitleProps {
    icon: ElementType;
    iconColor: string;
    title: string;
    description: string;
}

export function CheckoutSubtitle({icon: Icon, iconColor, title, description}: CheckoutSubtitleProps) {
    return (
        <CheckoutSubTitle>
            <Icon size={22} color={iconColor} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>    
        </CheckoutSubTitle>
    )
}
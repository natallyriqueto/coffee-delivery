import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import { CheckoutSubtitle } from "../CheckoutSubtitle";
import { PaymentType, PaymentTypeButton } from "./styles";

export function PaymentForm() {
    return (
        <>
            <CheckoutSubtitle 
                icon={CurrencyDollarSimple} 
                iconColor="#8047F8"
                title="Payment" 
                description="Payment is made upon delivery. Choose the way you want to pay"
            />
            <PaymentType defaultValue="default" className="RadioGroupRoot" aria-label="View density">
                <PaymentTypeButton 
                    variant="credito" 
                    value="credito" 
                >
                    <CreditCard size={16} />
                    Credit Card
                </PaymentTypeButton>

                <PaymentTypeButton 
                    variant="debito" 
                    value="debito" 
                >
                    <Bank size={16} />
                    Debit Card
                </PaymentTypeButton>

                <PaymentTypeButton 
                    variant="dinheiro"
                    value="dinheiro" 
                >
                    <Money size={16} />
                    Cash
                </PaymentTypeButton>
            </PaymentType> 
        </>
    )
}
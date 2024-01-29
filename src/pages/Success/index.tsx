import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { 
    OrderConfirmationContent, 
    OrderDetails, 
    SuccessContainer,
    OrderInfo,
    IMGContainer
} from "./styles";
import deliveryIMG from "@/assets/images/deliveryIMG.png";
import { RoundedIcon } from "@/components/RoundedIcon";

export function Success() {
    return (
        <SuccessContainer>
            <h1>Uhuu! Order placed.</h1>
            <h2>Now just wait and the coffee will reach you soon.</h2>

            <OrderConfirmationContent>
                <OrderDetails>
                    <OrderInfo>
                        <RoundedIcon icon={MapPin} bgColor="#8047F8" />
                        <div>
                            <p>Delivery in Piscataway - New Jersey</p>
                        </div>
                    </OrderInfo>
                    <OrderInfo>
                        <RoundedIcon icon={Clock} bgColor="#DBAC2C" />
                        <div>
                            <p>Estimate time</p>
                            <strong>20 min - 30 min </strong>
                        </div>
                    </OrderInfo>
                    <OrderInfo>
                        <RoundedIcon icon={CurrencyDollar} bgColor="#C47F17" />
                        <div>
                            <p>Payment on delivery</p>
                            <strong>Credit Card</strong>
                        </div>
                    </OrderInfo>
                </OrderDetails>
                <IMGContainer>
                    <img src={deliveryIMG} alt="person heading to deliver order" />
                </IMGContainer>
            </OrderConfirmationContent>
           
        </SuccessContainer>
    )
}
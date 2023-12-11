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
            <h1>Uhuu! Pedido confirmado.</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>

            <OrderConfirmationContent>
                <OrderDetails>
                    <OrderInfo>
                        <RoundedIcon icon={MapPin} bgColor="#8047F8" />
                        <div>
                            <p>Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</p>
                        </div>
                    </OrderInfo>
                    <OrderInfo>
                        <RoundedIcon icon={Clock} bgColor="#DBAC2C" />
                        <div>
                            <p>Previsão de entrega</p>
                            <strong>20 min - 30 min </strong>
                        </div>
                    </OrderInfo>
                    <OrderInfo>
                        <RoundedIcon icon={CurrencyDollar} bgColor="#C47F17" />
                        <div>
                            <p>Pagamento na entrega</p>
                            <strong>Cartão de Crédito</strong>
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
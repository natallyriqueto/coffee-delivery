import { CheckoutSubtitle } from "./CheckoutSubtitle";
import { Form } from "./Form";
import { 
    CheckoutContainer, 
    OrderContent,
    Card,
    OrderCart,
    CheckoutContent,
    PaymentTypeButton,
    PaymentType,
    CartListItems
} from "./style";
import { 
    Bank, 
    CreditCard, 
    CurrencyDollarSimple, 
    MapPinLine,
    Minus,
    Money,
    Plus
} from "phosphor-react";
import { useContext } from "react";
import { CartContext, CartItemsType } from "@/contexts/CartContext";
import { CoffeeQuantity } from "../Home/components/CoffeeList/CoffeeItem/styles";

export function Checkout() {
    const { cartItems, addItem, removeItem } = useContext(CartContext);

    function addCoffee(item: CartItemsType) {
        addItem({...item, quantity: item.quantity + 1});
    }

    function removeCoffee(item: CartItemsType) {
        removeItem({...item, quantity: item.quantity - 1});
    }

    return (
        <CheckoutContainer>

            <CheckoutContent>
                <h2>Complete seu pedido</h2>
                <Card>
                    <CheckoutSubtitle 
                        icon={MapPinLine} 
                        iconColor="#C47F17"
                        title="Endereço de Entrega" 
                        description="Informe o endereço onde deseja receber seu pedido"
                    />
                    <Form />
                </Card>
                <Card>
                    <CheckoutSubtitle 
                        icon={CurrencyDollarSimple} 
                        iconColor="#8047F8"
                        title="Pagamento" 
                        description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    />
                    
                    <form>
                        <PaymentType defaultValue="default" className="RadioGroupRoot" aria-label="View density">
                            <PaymentTypeButton 
                                variant="credito" 
                                value="credito" 
                            >
                                <CreditCard size={16} />
                                Cartão de crédito
                            </PaymentTypeButton>

                            <PaymentTypeButton 
                                variant="debito" 
                                value="debito" 
                            >
                                <Bank size={16} />
                                Cartão de débito
                            </PaymentTypeButton>

                            <PaymentTypeButton 
                                variant="dinheiro"
                                value="dinheiro" 
                            >
                                <Money size={16} />
                                Dinheiro
                            </PaymentTypeButton>
                        </PaymentType> 
                    </form>
                  
                </Card>
            </CheckoutContent>

            <OrderCart>
                <h2>Cafés selecionados</h2>
                <OrderContent>
                    <div>
                        <div>
                            {cartItems.map((item) => {
                                return (
                                    <CartListItems>
                                        <img src={item.picture} />
                                        <p>{item.title}</p>
                                        <CoffeeQuantity>
                                            <Minus size={14} color="#4B2995" onClick={() => removeCoffee(item)} />
                                            <span>{item.quantity}</span>
                                            <Plus size={14} color="#4B2995" onClick={() => addCoffee(item)} />
                                        </CoffeeQuantity>
                                        <p>{item.price}</p>
                                    </CartListItems>
                                )
                            })}
                        </div>

                    </div>
                </OrderContent>
            </OrderCart>
        
        </CheckoutContainer>
    );
}
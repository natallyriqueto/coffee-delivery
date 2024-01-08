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
    OrderItem,
    RemoveButton,
    CheckoutTitle,
    OrderQuantity,
    Actions,
    OrderInfo,
    TotalPrice,
    ConfirmButton
} from "./style";
import { 
    Bank, 
    CreditCard, 
    CurrencyDollarSimple, 
    MapPinLine,
    Minus,
    Money,
    Plus,
    Trash
} from "phosphor-react";
import { useContext } from "react";
import { CartContext, CartItemsType } from "@/contexts/CartContext";

export function Checkout() {
    const { cartItems, addItem, removeItem, total } = useContext(CartContext);

    function addCoffee(item: CartItemsType) {
        addItem({...item, quantity: item.quantity + 1});
    }

    function removeCoffee(item: CartItemsType) {
        removeItem({...item, quantity: item.quantity - 1});
    }

    return (
        <CheckoutContainer>
            {cartItems.length > 0 ? 
            <>
             <CheckoutContent>
                <CheckoutTitle>Complete seu pedido</CheckoutTitle>
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
                <CheckoutTitle>Cafés selecionados</CheckoutTitle>
                <OrderContent>
                    <OrderItem>
                    {cartItems.map((item) => {
                        return (
                            <div>
                                <OrderInfo>
                                    <img src={item.picture} />
                                    <Actions>
                                        <p>{item.title}</p>
                                        <div>
                                            <OrderQuantity>
                                                <Minus size={14} color="#4B2995" onClick={() => removeCoffee(item)} />
                                                <span>{item.quantity}</span>
                                                <Plus size={14} color="#4B2995" onClick={() => addCoffee(item)} />
                                            </OrderQuantity>
                                            <RemoveButton type="button">
                                                <Trash size={16} />
                                                Remover
                                            </RemoveButton>
                                        </div>
                                    </Actions>
                                </OrderInfo>
                                <strong>R$ {item.price * item.quantity}</strong>
                            </div>
                        )
                    })}
                    </OrderItem>
                    
                    <TotalPrice>
                        <span>Total de itens</span>
                        <span>R$ 29,70</span>
                        <span>Entrega</span>
                        <span>R$ 3,50</span>
                        <h3>Total</h3>
                        <h3>R$ {total}</h3>
                    </TotalPrice>

                    <ConfirmButton type="button">Confirmar Pedido</ConfirmButton>
                </OrderContent>
            </OrderCart>
            </>
            :
            <CheckoutTitle>Your Cart is empty.</CheckoutTitle>
        }
        </CheckoutContainer>
    );
}
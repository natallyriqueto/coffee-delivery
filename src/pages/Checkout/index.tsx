import { CheckoutSubtitle } from "./CheckoutSubtitle";
import { AddressForm } from "./AddressForm";
import { 
    CheckoutContainer, 
    OrderContent,
    Card,
    OrderCart,
    CheckoutContent,
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
    MapPinLine,
    Minus,
    Plus,
    Trash
} from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext, CartItemsType } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { PaymentForm } from "./PaymentForm";

export function Checkout() {
    const { cartItems, addItem, removeItem, total } = useContext(CartContext);
    const [itemsQuantity, setItemsQuantity] = useState(0);

    function addCoffee(item: CartItemsType) {
        addItem({...item, quantity: item.quantity + 1});
    }

    function removeCoffee(item: CartItemsType) {
        removeItem({...item, quantity: item.quantity - 1});
    }

    function removeAll(item: CartItemsType) {
        removeItem({...item, quantity: 0});
    }

    useEffect(() => {
        const itemsQuantity = cartItems.reduce((acc, item) => {
            return acc += item.quantity
        }, 0);
        setItemsQuantity(itemsQuantity);
    },[cartItems])

    return (
        <CheckoutContainer>
            {cartItems.length > 0 ? 
            <>
             <CheckoutContent>
                <CheckoutTitle>Proceed to checkout</CheckoutTitle>
                <Card>
                    <CheckoutSubtitle 
                        icon={MapPinLine} 
                        iconColor="#C47F17"
                        title="Endereço de Entrega" 
                        description="Informe o endereço onde deseja receber seu pedido"
                    />
                    <AddressForm />
                </Card>
                <Card>
                   <PaymentForm />
                </Card>
            </CheckoutContent>

            <OrderCart>
                <CheckoutTitle>Selected items</CheckoutTitle>
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
                                            <RemoveButton type="button" onClick={() => removeAll(item)}>
                                                <Trash size={16} />
                                                Remove
                                            </RemoveButton>
                                        </div>
                                    </Actions>
                                </OrderInfo>
                                <strong>${item.price * item.quantity}</strong>
                            </div>
                        )
                    })}
                    </OrderItem>
                    
                    <TotalPrice>
                        <span>Items Quantity</span>
                        <span>{itemsQuantity}</span>
                        <span>Tax</span>
                        <span>$3.50</span>
                        <h3>Total</h3>
                        <h3>${total}</h3>
                    </TotalPrice>
                    
                    <Link to="/success"> 
                        <ConfirmButton type="button">Place your order</ConfirmButton>
                    </Link>
                </OrderContent>
            </OrderCart>
            </>
            :
            <CheckoutTitle>Your Cart is empty.</CheckoutTitle>
        }
        </CheckoutContainer>
    );
}
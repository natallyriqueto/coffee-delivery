import { CurrencyDollar, Minus, Plus, ShoppingCart } from "phosphor-react";
import { 
    CoffeTitle, 
    CoffeeBuy, 
    CoffeeActions, 
    CoffeeCart, 
    CoffeeDescription, 
    CoffeeItemContainer, 
    CoffeePrice, 
    CoffeeQuantity, 
    CoffeeTypeTag, 
    CoffeeImage } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
 
export interface ICoffeeItemProps {
    item: {
        id: number;
        picture: string;
        tag: string;
        title: string;
        description: string;
        price: number;
    }
}

export function CoffeeItem({ item }: ICoffeeItemProps) {
    const [counter, setCounter] = useState(0);
    const { addItem, removeItem } = useContext(CartContext);

    function addCoffee() {
        setCounter((state) => state + 1);
        addItem({...item, quantity: counter + 1});
    }

    function removeCoffee() {
        if (counter > 0) {
            setCounter((state) => state - 1);
        }
        removeItem({...item, quantity: counter - 1});
    }

    return (
        <CoffeeItemContainer>
            <CoffeeImage>
                <img src={item.picture} alt="coffee image" />
            </CoffeeImage>

            <CoffeeTypeTag>{item.tag}</CoffeeTypeTag>
            <CoffeTitle>{item.title}</CoffeTitle>
            <CoffeeDescription>{item.description}</CoffeeDescription>

            <CoffeeBuy>
                <CoffeePrice>
                    <span>
                        <CurrencyDollar size={16} />
                        <strong>{item.price}</strong>
                    </span>
                </CoffeePrice>

                <CoffeeActions>
                    <CoffeeQuantity>
                        <Minus size={14} color="#4B2995" onClick={removeCoffee} />
                        <span>{counter}</span>
                        <Plus size={14} color="#4B2995" onClick={addCoffee} />
                    </CoffeeQuantity>
                    <CoffeeCart>
                        <Link to="/checkout">
                            <ShoppingCart weight="fill" size={22} color="#ffff" />
                        </Link>
                    </CoffeeCart>
                </CoffeeActions>

            </CoffeeBuy>
        </CoffeeItemContainer>
    )
}
import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextType {
    cartItems: CartItemsType[];
    addItem: (item: CartItemsType) => void;
    removeItem: (item: CartItemsType) => void;
    total: number;
}

export const CartContext = createContext({} as CartContextType);

interface TransactionProviderProps {
    children: ReactNode;
}

export interface CartItemsType {
    id: number;
    picture: string;
    title: string;
    price: number;
    quantity: number;
}
  
export function CartContextProvider({ children }: TransactionProviderProps) {
    const [cartItems, setCartItems] = useState([] as CartItemsType[]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        sumTotal();
    }, [cartItems]);

    function sumTotal() {
        const total = cartItems.reduce(
            (acc, currentValue) => acc + Number(currentValue.price) * Number(currentValue.quantity),
            0,
        );

        const roundedTotal = Number(total.toFixed(2));
        setTotal(roundedTotal);
    }

    function addItem(newItem: CartItemsType) {
        const exists = cartItems.find((item) => item.id === newItem.id);
        
        if (!exists) {
          setCartItems((state) => [...state, newItem]);
        } else {
          setCartItems((state) =>
            state.map((item) =>
              item.id === newItem.id ? 
              { ...item, quantity: item.quantity = newItem.quantity } : item
            )
          );
        }
    }

    function removeItem(itemToRemove: CartItemsType) {
        if (itemToRemove.quantity > 0) {
            setCartItems((state) =>
                state.map((item) =>
                    item.id === itemToRemove.id ? 
                    { ...item, quantity: itemToRemove.quantity} : item
                )
            );
        }
        else {
            const newCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
            setCartItems(newCartItems);
        }
    }

    return (
        <CartContext.Provider value={{
            cartItems, 
            addItem, 
            removeItem,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}


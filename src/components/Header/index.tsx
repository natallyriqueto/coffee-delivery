import logo from '@/assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Cart, HeaderContainer, Location, HeaderContent, CartBadge } from './style'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'

export function Header() {
    const { cartItems } = useContext(CartContext);

    return (
        <HeaderContainer>
            <Link to="/">
                <img src={logo} alt="logo image" />
            </Link>
            <HeaderContent>
                <Location>
                    <MapPin size={22} weight="fill" color='#8047F8' />
                    <span>Piscataway, NJ</span>
                </Location>
                <Cart>
                    <Link to="/checkout">
                        <ShoppingCart size={22} weight="fill" color='#C47F17' />
                    </Link>
                    {cartItems.length > 0 && 
                        <CartBadge>{cartItems.length}</CartBadge> 
                    }
                </Cart>
            </HeaderContent>
            
        </HeaderContainer>
    )
}
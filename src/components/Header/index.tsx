import logo from '@/assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Cart, HeaderContainer, Location, HeaderContent } from './style'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo image" />
            <HeaderContent>
                <Location>
                    <MapPin size={22} weight="fill" color='#8047F8' />
                    <span>Porto Alegre, RS</span>
                </Location>
                <Cart>
                    <ShoppingCart size={22} weight="fill" color='#C47F17' />
                </Cart>
            </HeaderContent>
            
        </HeaderContainer>
    )
}
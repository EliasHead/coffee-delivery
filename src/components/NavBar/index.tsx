import {
  NavBarContainer,
  ActionsContainer,
  LocationContainer,
  CartContainer,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffe from '../../assets/Logo.svg'

export function NavBar() {
  return (
    <NavBarContainer>
      <span>
        <img src={logoCoffe} alt="" />
      </span>
      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" color="#8047F8" />
          <span>Fortaleza, CE</span>
        </LocationContainer>
        <CartContainer>
          <span>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </span>
        </CartContainer>
      </ActionsContainer>
    </NavBarContainer>
  )
}

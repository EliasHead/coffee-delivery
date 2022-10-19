import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingCartC } from '../ShoppingCart/ShoppingCart'

import {
  NavBarContainer,
  ActionsContainer,
  LocationContainer,
  CartContainer,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffe from '../../assets/Logo.svg'
import { Link, Outlet } from 'react-router-dom'
import { useShoppingCart } from '../../context/ProductCartContext'

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <>
      <NavBarContainer>
        <Link to="/">
          <img src={logoCoffe} alt="" />
        </Link>
        <ActionsContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" color="#8047F8" />
            <span>Fortaleza, CE</span>
          </LocationContainer>
          {cartQuantity > 0 && (
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <CartContainer onClick={openCart}>
                  <ShoppingCart size={22} weight="fill" color="#C47F17" />
                  <div>{cartQuantity}</div>
                </CartContainer>
              </Dialog.Trigger>

              <ShoppingCartC />
            </Dialog.Root>
          )}
        </ActionsContainer>
      </NavBarContainer>
      <Outlet />
    </>
  )
}

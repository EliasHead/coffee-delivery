import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react'
import { useShoppingCart } from '../../context/ProductCartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { Tag } from '../Tag'
import {
  ActionsButtonCart,
  ActionsConatiner,
  BuyConatiner,
  CoffeeCardContainer,
  CounterContainer,
  ImageCard,
} from './styles'

export interface CoffeeItensProps {
  id: number
  imgUrl: string
  tag?: string[]
  title: string
  description: string
  price: number
}

export function CoffeeItens({
  id,
  imgUrl,
  tag,
  title,
  description,
  price,
}: CoffeeItensProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()

  const quantity = getItemQuantity(id)

  return (
    <CoffeeCardContainer>
      <ImageCard>
        <img src={imgUrl} alt="#" />
      </ImageCard>

      <Tag text="tradicional" />

      <h4>{title}</h4>

      <p>{description}</p>

      <BuyConatiner>
        <span>
          <strong>{formatCurrency(price)}</strong>
        </span>

        <ActionsConatiner>
          <CounterContainer>
            <button onClick={() => decreaseCartQuantity(id)}>
              <Minus size={22} color="purple" />
            </button>

            <span>{quantity}</span>

            <button onClick={() => increaseCartQuantity(id)}>
              <Plus size={22} color="purple" />
            </button>
          </CounterContainer>

          <ActionsButtonCart>
            <ShoppingCart size={22} weight="fill" color="white" />
          </ActionsButtonCart>

          <button style={{ border: 'none' }} onClick={() => removeFromCart(id)}>
            <Trash size={32} color="red" weight="fill" />
          </button>
        </ActionsConatiner>
      </BuyConatiner>
    </CoffeeCardContainer>
  )
}

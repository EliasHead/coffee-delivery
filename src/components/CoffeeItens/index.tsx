import { Minus, Plus, ShoppingCart } from 'phosphor-react'
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
  img: string
  tag?: string[]
  title: string
  description: string
  price: number
}

export function CoffeeItens({
  img,
  tag,
  title,
  description,
  price,
}: CoffeeItensProps) {
  return (
    <CoffeeCardContainer>
      <ImageCard>
        <img src={img} alt="#" />
      </ImageCard>

      <Tag text="tradicional" />

      <h4>{title}</h4>

      <p>{description}</p>

      <BuyConatiner>
        <span>
          R$ <strong>{price}</strong>
        </span>

        <ActionsConatiner>
          <CounterContainer>
            <button>
              <Minus size={22} color="purple" />
            </button>

            <input type="text" defaultValue="1" />

            <button>
              <Plus size={22} color="purple" />
            </button>
          </CounterContainer>

          <ActionsButtonCart>
            <ShoppingCart size={22} weight="fill" color="white" />
          </ActionsButtonCart>
        </ActionsConatiner>
      </BuyConatiner>
    </CoffeeCardContainer>
  )
}

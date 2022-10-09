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
}

export function CoffeeItens({ img }: CoffeeItensProps) {
  return (
    <CoffeeCardContainer>
      <ImageCard>
        <img src={img} alt="#" />
      </ImageCard>

      <Tag text="tradicional" />

      <h4>Expresso Tradicional</h4>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuyConatiner>
        <span>
          R$ <strong>9,90</strong>
        </span>

        <ActionsConatiner>
          <CounterContainer>
            <button>
              <Minus size={22} color="purple" />
            </button>

            <input type="text" value="1" />

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

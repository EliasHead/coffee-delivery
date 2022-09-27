import { CoffeeCardContainer } from './styles'

export interface CoffeeItensProps {
  img: string
}

export function CoffeeItens({ img }: CoffeeItensProps) {
  return (
    <CoffeeCardContainer>
      <div>
        <img src={img} alt="#" />
      </div>
    </CoffeeCardContainer>
  )
}

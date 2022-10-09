import {
  CoffeListContainer,
  FilterContainer,
  CoffeeItensConteiner,
} from './styles'

import { Tag } from '../Tag'

import { CoffeeItens } from '../CoffeeItens'

const coffees = [
  {
    img: 'src/assets/coffee1.svg',
  },
  {
    img: 'src/assets/coffee2.svg',
  },
  {
    img: 'src/assets/coffee3.svg',
  },
  {
    img: 'src/assets/coffee4.svg',
  },
  {
    img: 'src/assets/coffee5.svg',
  },
  {
    img: 'src/assets/coffee6.svg',
  },
  {
    img: 'src/assets/coffee7.svg',
  },
  {
    img: 'src/assets/coffee8.svg',
  },
  {
    img: 'src/assets/coffee9.svg',
  },
  {
    img: 'src/assets/coffee10.svg',
  },
  {
    img: 'src/assets/coffee11.svg',
  },
  {
    img: 'src/assets/coffee12.svg',
  },
  {
    img: 'src/assets/coffee13.svg',
  },
  {
    img: 'src/assets/coffee14.svg',
  },
]

export function CoffeeList() {
  return (
    <CoffeListContainer>
      <h1>Nossos cafés</h1>
      <FilterContainer>
        <Tag text="tradicional" />
        <Tag text="especial" />
        <Tag text="com leite" />
        <Tag text="alcoólico" />
        <Tag text="gelado" />
      </FilterContainer>

      <CoffeeItensConteiner>
        {coffees.map((coffee) => {
          return <CoffeeItens key={coffee.img} img={coffee.img} />
        })}
      </CoffeeItensConteiner>
    </CoffeListContainer>
  )
}

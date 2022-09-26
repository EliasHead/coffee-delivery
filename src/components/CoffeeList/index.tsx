import {
  CoffeListContainer,
  FilterContainer,
  Tag1,
  Tag2,
  Tag3,
  Tag4,
  Tag5,
} from './styles'

export function CoffeeList() {
  return (
    <CoffeListContainer>
      <h1>Nossos cafés</h1>
      <FilterContainer>
        <Tag1>
          <span>tradicional</span>
        </Tag1>
        <Tag2>
          <span>especial</span>
        </Tag2>
        <Tag3>
          <span>com leite</span>
        </Tag3>
        <Tag4>
          <span>alcoólico</span>
        </Tag4>
        <Tag5>
          <span>gelado</span>
        </Tag5>
      </FilterContainer>
    </CoffeListContainer>
  )
}

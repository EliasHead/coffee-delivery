import {
  CoffeListContainer,
  FilterContainer,
  CoffeeItensConteiner,
  CoffeeCard1,
  CoffeeCard2,
  CoffeeCard3,
  CoffeeCard4,
  CoffeeCard5,
  CoffeeCard6,
  CoffeeCard7,
  CoffeeCard8,
  CoffeeCard9,
  CoffeeCard10,
  CoffeeCard11,
  CoffeeCard12,
  CoffeeCard13,
  CoffeeCard14,
} from './styles'

import { Tag } from '../Tag'

import img1 from '../../assets/coffee1.svg'

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
        <CoffeeCard1>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard1>
        <CoffeeCard2>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard2>
        <CoffeeCard3>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard3>
        <CoffeeCard4>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard4>
        <CoffeeCard5>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard5>
        <CoffeeCard6>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard6>
        <CoffeeCard7>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard7>
        <CoffeeCard8>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard8>
        <CoffeeCard9>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard9>
        <CoffeeCard10>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard10>
        <CoffeeCard11>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard11>
        <CoffeeCard12>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard12>
        <CoffeeCard13>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard13>
        <CoffeeCard14>
          <div>
            <img src={img1} alt="" />
          </div>
        </CoffeeCard14>
      </CoffeeItensConteiner>
    </CoffeListContainer>
  )
}

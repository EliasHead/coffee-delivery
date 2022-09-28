import {
  CoffeListContainer,
  FilterContainer,
  CoffeeItensConteiner,
  // CoffeeCard1,
  // CoffeeCard2,
  // CoffeeCard3,
  // CoffeeCard4,
  // CoffeeCard5,
  // CoffeeCard6,
  // CoffeeCard7,
  // CoffeeCard8,
  // CoffeeCard9,
  // CoffeeCard10,
  // CoffeeCard11,
  // CoffeeCard12,
  // CoffeeCard13,
  // CoffeeCard14,
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

        {/* <CoffeeCard1>
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
        </CoffeeCard14> */}
      </CoffeeItensConteiner>
    </CoffeListContainer>
  )
}

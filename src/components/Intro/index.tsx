import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  IntroContainer,
  Item1,
  Item2,
  Item3,
  Item4,
  ItemsContainer,
  SubTitle,
  Title,
  TitleContainer,
} from './styles'

import imgCapa from '../../assets/capa.svg'

export function Intro() {
  return (
    <IntroContainer>
      <TitleContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SubTitle>
      </TitleContainer>
      <ItemsContainer>
        <Item1>
          <div>
            <ShoppingCart size={16} weight="fill" />
          </div>
          <span>Compra simples e segura</span>
        </Item1>
        <Item2>
          <div>
            <Timer size={16} weight="fill" />
          </div>
          <span>Entrega rápida e rastreada</span>
        </Item2>
        <Item3>
          <div>
            <Package size={16} weight="fill" />
          </div>
          <span>Embalagem mantém o café intacto</span>
        </Item3>
        <Item4>
          <div>
            <Coffee size={16} weight="fill" />
          </div>
          <span>O café chega fresquinho até você</span>
        </Item4>
      </ItemsContainer>

      <span>
        <img src={imgCapa} alt="" />
      </span>
    </IntroContainer>
  )
}

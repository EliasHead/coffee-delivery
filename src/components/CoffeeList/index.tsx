import {
  CoffeListContainer,
  FilterContainer,
  CoffeeItensConteiner,
} from './styles'

import { api } from '../../lib/axios'

import { Tag } from '../Tag'

import { CoffeeItens } from '../CoffeeItens'
import { useEffect, useState } from 'react'

type CoffeeProps = {
  id: number
  imgUrl: string
  tag?: string[]
  title: string
  description: string
  price: number
}

export function CoffeeList({
  id,
  imgUrl,
  tag,
  title,
  description,
  price,
}: CoffeeProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  async function buscaDados() {
    const response = await api.get('http://localhost:3000/coffees')

    setCoffees(response.data)
  }

  useEffect(() => {
    buscaDados()
  }, [])

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
          return (
            <CoffeeItens
              key={coffee.id}
              id={coffee.id}
              imgUrl={coffee.imgUrl}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
            />
          )
        })}
      </CoffeeItensConteiner>
    </CoffeListContainer>
  )
}

import {
  CoffeListContainer,
  FilterContainer,
  CoffeeItensConteiner,
} from './styles'

import { api } from '../../lib/axios'

import { Tag } from '../Tag'

import { CoffeeItens } from '../CoffeeItens'
import { useEffect, useState } from 'react'

interface CoffeeProps {
  img: string
}

export function CoffeeList() {
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
          return <CoffeeItens key={coffee.img} img={coffee.img} />
        })}
      </CoffeeItensConteiner>
    </CoffeListContainer>
  )
}

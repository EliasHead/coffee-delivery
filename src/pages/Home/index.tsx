import { CoffeeList } from '../../components/CoffeeList'
import { Intro } from '../../components/Intro'
import { HomeConteiner } from './styles'

export function Home() {
  return (
    <HomeConteiner>
      <Intro />

      <CoffeeList />
    </HomeConteiner>
  )
}

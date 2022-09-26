import { CoffeeList } from '../../components/CoffeeList'
import { Intro } from '../../components/Intro'
import { NavBar } from '../../components/NavBar'
import { HomeConteiner } from './styles'

export function Home() {
  return (
    <HomeConteiner>
      <NavBar />

      <Intro />

      <CoffeeList />
    </HomeConteiner>
  )
}

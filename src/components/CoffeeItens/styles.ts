import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  background: red;

  position: absolute;
  display: flex;

  div {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
    margin-left: 4.25rem;
    svg {
      width: 7.5rem;
      height: 7.5rem;

      position: absolute;
      margin: unset;

      background: url(imgCoffee);
    }
  }
`

export const CoffeeCard1 = styled(CoffeeCardContainer)`
  margin-top: 0px;
  margin-left: 0px;
`

export const CoffeeCard2 = styled(CoffeeCardContainer)`
  margin-top: 21.875rem;
  margin-left: 0px;
`

export const CoffeeCard3 = styled(CoffeeCardContainer)`
  margin-top: 43.75rem;
  margin-left: 0px;
`

export const CoffeeCard4 = styled(CoffeeCardContainer)`
  margin-top: 65.625rem;
  margin-left: 0px;
`

export const CoffeeCard5 = styled(CoffeeCardContainer)`
  margin-top: 0px;
  margin-left: 18rem;
`

export const CoffeeCard6 = styled(CoffeeCardContainer)`
  margin-top: 21.875rem;
  margin-left: 18rem;
`

export const CoffeeCard7 = styled(CoffeeCardContainer)`
  margin-top: 43.75rem;
  margin-left: 18rem;
`

export const CoffeeCard8 = styled(CoffeeCardContainer)`
  margin-top: 65.625rem;
  margin-left: 18rem;
`

export const CoffeeCard9 = styled(CoffeeCardContainer)`
  margin-top: 0px;
  margin-left: 36rem;
`

export const CoffeeCard10 = styled(CoffeeCardContainer)`
  margin-top: 21.875rem;
  margin-left: 36rem;
`

export const CoffeeCard11 = styled(CoffeeCardContainer)`
  margin-top: 43.75rem;
  margin-left: 36rem;
`

export const CoffeeCard12 = styled(CoffeeCardContainer)`
  margin-top: 0px;
  margin-left: 54rem;
`

export const CoffeeCard13 = styled(CoffeeCardContainer)`
  margin-top: 21.875rem;
  margin-left: 54rem;
`

export const CoffeeCard14 = styled(CoffeeCardContainer)`
  margin-top: 43.75rem;
  margin-left: 54rem;
`

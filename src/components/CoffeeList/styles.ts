import styled from 'styled-components'

export const CoffeListContainer = styled.div`
  width: 90rem;
  height: 102.8125rem;
  top: 40.5rem;

  position: absolute;

  h1 {
    width: 12rem;
    height: 2.625rem;
    top: 2rem;
    left: 10rem;

    position: absolute;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};

    display: flex;
    align-items: center;

    white-space: nowrap;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  flex-basis: 100%;

  width: 25.4375rem;
  height: 1.56.25rem;
  top: 2.5625rem;
  left: 54.5625rem;

  position: absolute;
`

export const CoffeeItensConteiner = styled.div`
  width: 70rem;
  height: 85rem;
  top: 8rem;
  left: 10rem;

  position: absolute;

  display: flex;
  gap: 1rem;
`

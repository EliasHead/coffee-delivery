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
  width: 25.4375rem;
  height: 1.56.25rem;
  top: 2.5625rem;
  left: 54.5625rem;
  gap: 0.5rem;

  position: absolute;
`

export const BaseTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 5.5625rem;
  height: 1.5625rem;
  padding: 0.375rem 0.75rem;
  gap: 0.5rem;

  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 100px;

  white-space: nowrap;
`
export const Tag1 = styled(BaseTag)`
  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Tag2 = styled(BaseTag)`
  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Tag3 = styled(BaseTag)`
  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Tag4 = styled(BaseTag)`
  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const Tag5 = styled(BaseTag)`
  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
`

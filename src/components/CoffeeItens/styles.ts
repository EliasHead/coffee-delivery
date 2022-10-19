import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-family: 'Baloo 2';
    font-weight: 700;
    line-height: 130%;

    margin-top: 0.5rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};

    text-align: center;
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 130%;

    margin-top: 1rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;

    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const ImageCard = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
  /* margin-left: 4.25rem; */

  svg {
    width: 7.5rem;
    height: 7.5rem;

    position: absolute;
    margin: unset;

    background: url(imgCoffee);
  }
`

export const BuyConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: 13rem;
  height: 2.375rem;

  margin-top: 33px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 20px;

  > span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    text-align: center;

    color: ${(props) => props.theme['base-text']};

    strong {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ActionsConatiner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  height: 100%;

  flex: 1;
  order: 1;
  flex-grow: 0;
`

export const ActionsButtonCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
`

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  width: 4.5rem;
  height: 2.375rem;

  button {
    border: 0;
  }

  input {
    width: 20px;
    border: 0;
    background: ${(props) => props.theme['base-button']};
  }
`

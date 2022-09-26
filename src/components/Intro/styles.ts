import styled from 'styled-components'

export const IntroContainer = styled.div`
  width: 90rem;
  height: 34rem;
  top: 6.5rem;
  left: 0px;
  right: 0px;

  position: absolute;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;

  position: absolute;
  width: 36.75rem;
  height: 12rem;
  left: 10rem;
  top: 5.875rem;
`

export const Title = styled.h1`
  /* Encontre o café perfeito para qualquer hora do dia */

  width: 36.75rem;
  height: 7.75rem;

  /* Title/Title XL */

  font-family: 'Baloo 2';
  font-weight: 800;
  font-style: normal;
  font-size: 3rem;
  line-height: 130%;
  /* or 62px */

  /* Base/Title */

  color: ${({ theme }) => theme['base-title']};

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const SubTitle = styled.h3`
  width: 36.75rem;
  height: 3.25rem;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.25rem;
  font-stretch: 100;
  line-height: 130%;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

export const ItemsContainer = styled.div`
  position: absolute;
  width: 35.4375rem;
  height: 5.25rem;
  margin-top: 22rem;
  margin-left: 10rem;
`

export const BaseItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 0.75rem;

  position: absolute;
  height: 2rem;
`

export const Item1 = styled(BaseItem)`
  width: 14.4375rem;
  margin-left: 0px;
  margin-top: 0px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    width: 32;
    height: 32;

    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 1000px;

    svg {
      color: white;
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Item2 = styled(BaseItem)`
  width: 14.4375rem;
  margin-left: 0px;
  margin-top: 3.25rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    width: 32;
    height: 32;

    background: ${(props) => props.theme.yellow};
    border-radius: 1000px;

    svg {
      color: white;
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Item3 = styled(BaseItem)`
  width: 18.375rem;
  margin-left: 16.9375rem;
  margin-top: 0px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    width: 32;
    height: 32;

    background: ${(props) => props.theme['base-text']};
    border-radius: 1000px;

    svg {
      color: white;
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Item4 = styled(BaseItem)`
  width: 18.375rem;
  margin-left: 16.9375rem;
  margin-top: 3.25rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;

    width: 32;
    height: 32;

    background: ${(props) => props.theme.purple};
    border-radius: 1000px;

    svg {
      color: white;
    }

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

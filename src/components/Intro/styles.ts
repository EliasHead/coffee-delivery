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

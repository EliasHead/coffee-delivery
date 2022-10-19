import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  top: 0;

  width: 90rem;
  height: 6.5rem;

  /* Base/Background */
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;

  width: 12rem;
  height: 2.5rem;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`
export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 8.9375rem;
  height: 2.375rem;

  /* Brand/Purple Light */

  background: ${({ theme }) => theme['purple-light']};
  border-radius: 0.375rem;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  span {
    line-height: 130%;
    color: ${({ theme }) => theme['purple-dark']};
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
  }
`
export const CartContainer = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  background: ${({ theme }) => theme['yellow-light']};
  border-radius: 0.375rem;

  svg {
    margin-top: 0.5rem;
  }

  div {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: red;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

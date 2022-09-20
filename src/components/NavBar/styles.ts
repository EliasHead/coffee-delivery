import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;

  position: absolute;
  height: 6.5rem;
  left: 0px;
  right: 0px;
  top: 0px;

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
export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 2.375rem;
  height: 2.375rem;
  background: ${({ theme }) => theme['yellow-light']};
  border-radius: 0.375rem;

  flex: none;
  order: 1;
  flex-grow: 0;
`

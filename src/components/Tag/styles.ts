import styled from 'styled-components'

export const TagContainer = styled.div`
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

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
  }
`

import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgb(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme.background};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const TotalContainer = styled.div`
  margin-top: 2rem;
  font-weight: bold;

  text-align: end;
`

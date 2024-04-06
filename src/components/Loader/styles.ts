import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`

export const Spinner = styled.img`
  width: 5.1875rem;
  height: 5.1875rem;
  border-radius: 50%;
  animation: ${spinner} 1s linear infinite;
`

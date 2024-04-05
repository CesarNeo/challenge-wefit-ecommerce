import styled from 'styled-components'

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1.5rem 1rem;
  align-items: center;

  > h1 {
    font-weight: bold;
    font-size: 1.25rem;
  }
`

export const ContainerCart = styled.button`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.white};
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: right;

    span {
      font-weight: 600;
    }
  }
`

export const MyCartSpan = styled.span`
  font-size: 0.875rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const CartItensSpan = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme['text-secondary']};
`

export const CartIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`

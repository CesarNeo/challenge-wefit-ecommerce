import styled from 'styled-components'

export const CartContainer = styled.div`
  padding: 1rem;

  background: ${({ theme }) => theme.white};
  border-radius: 0.25rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`

export const CartTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.3125rem;

  color: ${({ theme }) => theme['text-primary']};
  border-top: 1px solid ${({ theme }) => theme['text-secondary']};

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`

export const CartTotalPriceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  font-weight: bold;

  > span {
    font-size: 0.875rem;
    text-transform: uppercase;

    color: ${({ theme }) => theme['text-secondary']};
  }

  > strong {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 1.75rem;
  }
`
export const ButtonCompleteOrderContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 10.8125rem;
  }
`

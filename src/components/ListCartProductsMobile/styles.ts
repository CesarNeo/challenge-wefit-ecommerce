import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding-bottom: 1.3125rem;

  color: ${({ theme }) => theme['text-primary']};

  > img {
    width: 4rem;
    height: 5.125rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const ProductDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
  align-items: center;
  font-weight: bold;

  > span {
    font-size: 0.875rem;
  }

  > strong {
    font-size: 1rem;
  }
`

export const ProductDetailsSubtotal = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
`

export const ProductDetailsSubtotalContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  > span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme['text-secondary']};
  }

  > strong {
    font-size: 1rem;
  }
`

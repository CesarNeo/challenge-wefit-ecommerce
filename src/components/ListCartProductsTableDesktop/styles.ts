import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-bottom: 24px;

  color: ${({ theme }) => theme['text-primary']};
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`
export const HeadContent = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 1fr 1.125rem;
  font-size: 0.875rem;
  align-items: center;
  padding-bottom: 1.5rem;

  font-weight: bold;
  color: ${({ theme }) => theme['text-secondary']};
  text-transform: uppercase;
`
export const MainContent = styled.div`
  display: grid;
  gap: 1.5rem;
`

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 1fr 1.125rem;
  align-items: center;
  color: ${({ theme }) => theme['text-primary']};
`
export const ProductDetails = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme['text-primary']};

  > img {
    width: 5.6875rem;
    height: 7.125rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > span {
      font-size: 0.875rem;
    }

    > strong {
      font-size: 1rem;
    }
  }
`
export const ProductPrice = styled.strong`
  font-weight: bold;
  font-size: 1rem;
`

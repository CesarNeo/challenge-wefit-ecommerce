import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding-bottom: 2.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 4rem;
    height: 100%;

    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme['text-primary']};
    border-radius: 0.25rem;

    > h1 {
      font-weight: bold;
      font-size: 1.25rem;
      text-align: center;
    }
  }
`
export const PurchaseCompletedImg = styled.img`
  width: 14.875rem;
  height: 15.4825rem;

  @media (min-width: 768px) {
    max-width: 18.435rem;
    max-height: 19.1875rem;
    width: 100%;
    height: 100%;
  }
`

export const PurchaseCompletedButtonContainer = styled.div`
  max-width: 10.8125rem;
  width: 100%;
`

import styled from 'styled-components'

import cartEmptyImgDesktop from '../../assets/images/cart-empty-desktop.svg'
import cartEmptyImgMobile from '../../assets/images/cart-empty-mobile.svg'

export const Container = styled.div`
  height: 100%;
  padding-bottom: 2.5rem;
`

export const ContainerCartEmpty = styled.div`
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
`

export const CartEmptyImg = styled.div`
  width: 11.1644rem;
  height: 16.585rem;
  background: url(${cartEmptyImgMobile}) no-repeat center;

  @media (min-width: 768px) {
    max-width: 27.9375rem;
    max-height: 16.585rem;
    width: 100%;
    height: 100%;

    background: url(${cartEmptyImgDesktop}) no-repeat center;
  }
`

export const ButtonEmptyCart = styled.button`
  max-width: 10.8125rem;
  width: 100%;
  height: 2.5rem;

  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border-radius: 0.25rem;
  font-weight: bold;
`

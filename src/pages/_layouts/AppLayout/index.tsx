import { Outlet } from 'react-router-dom'

import Header from '../../../components/Header'
import CartProvider from '../../../contexts/cart'
import * as S from './styles'

function AppLayout() {
  return (
    <CartProvider>
      <S.Container>
        <Header />

        <S.ContentContainer>
          <Outlet />
        </S.ContentContainer>
      </S.Container>
    </CartProvider>
  )
}

export default AppLayout

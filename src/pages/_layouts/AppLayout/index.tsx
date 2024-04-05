import { Outlet } from 'react-router-dom'

import * as S from './styles'

function AppLayout() {
  return (
    <S.Container>
      {/* <Header /> */}

      <S.ContentContainer>
        <Outlet />
      </S.ContentContainer>
    </S.Container>
  )
}

export default AppLayout

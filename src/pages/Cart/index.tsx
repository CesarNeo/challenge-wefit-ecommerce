import * as S from './styles'

function CartPage() {
  return (
    <S.Container>
      <S.ContainerCartEmpty>
        <h1>Parece que não há nada por aqui :(</h1>

        <S.CartEmptyImg />
        <S.ButtonEmptyCart>Recarregar página</S.ButtonEmptyCart>
      </S.ContainerCartEmpty>
    </S.Container>
  )
}

export default CartPage

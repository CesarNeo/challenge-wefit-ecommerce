import * as S from './styles'

function CartEmpty() {
  return (
    <S.Container>
      <div>
        <h1>Parece que não há nada por aqui :(</h1>

        <S.CartEmptyImg />
        <S.ButtonEmptyCart to="/">Recarregar página</S.ButtonEmptyCart>
      </div>
    </S.Container>
  )
}

export default CartEmpty

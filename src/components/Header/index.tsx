import cartIcon from '../../assets/icons/cart-icon.svg'
import * as S from './styles'

function Header() {
  return (
    <S.Container>
      <h1>WeMovies</h1>

      <S.ContainerCart>
        <div>
          <S.MyCartSpan>Meu Carrinho</S.MyCartSpan>
          <S.CartItensSpan>O itens</S.CartItensSpan>
        </div>

        <S.CartIcon src={cartIcon} alt="Ícone de compras" />
      </S.ContainerCart>
    </S.Container>
  )
}

export default Header

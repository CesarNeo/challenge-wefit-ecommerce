import cartIcon from '../../assets/icons/bag-icon.svg'
import useCart from '../../hooks/cart'
import * as S from './styles'

function Header() {
  const { cart } = useCart()

  return (
    <S.Container>
      <h1>WeMovies</h1>

      <S.ContainerCart to="/cart">
        <div>
          <S.MyCartSpan>Meu Carrinho</S.MyCartSpan>
          <S.CartItensSpan>{cart.length} itens</S.CartItensSpan>
        </div>

        <S.CartIcon src={cartIcon} alt="Ícone de compras" />
      </S.ContainerCart>
    </S.Container>
  )
}

export default Header

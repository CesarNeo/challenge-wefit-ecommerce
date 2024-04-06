import { Link } from 'react-router-dom'

import cartIcon from '../../assets/icons/bag-icon.svg'
import useCart from '../../hooks/cart'
import * as S from './styles'

function Header() {
  const { cart } = useCart()

  return (
    <S.Container>
      <Link to="/">WeMovies</Link>

      <S.ContainerCart>
        <div>
          <S.MyCartSpan>Meu Carrinho</S.MyCartSpan>
          <S.CartItensLink to="/cart">{cart.length} itens</S.CartItensLink>
        </div>

        <S.CartIcon src={cartIcon} alt="Ícone de compras" />
      </S.ContainerCart>
    </S.Container>
  )
}

export default Header

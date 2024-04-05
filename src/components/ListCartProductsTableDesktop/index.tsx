import useCart from '../../hooks/cart'
import { formatPrice } from '../../utils'
import ButtonRemoveCartProduct from '../ButtonRemoveCartProduct'
import QuantityActions from '../QuantityActions'
import * as S from './styles'

function ListCartProductsTableDesktop() {
  const { cart } = useCart()

  return (
    <S.Container>
      <S.HeadContent>
        <span>Produto</span>
        <span>qtd</span>
        <span>Subtotal</span>
      </S.HeadContent>

      <S.MainContent>
        {cart.map((movie) => (
          <S.CartContent key={movie.id}>
            <S.ProductDetails>
              <img src={movie.image} alt={movie.title} />
              <div>
                <span>{movie.title}</span>
                <strong>{formatPrice(movie.price)}</strong>
              </div>
            </S.ProductDetails>

            <div>
              <QuantityActions movieId={movie.id} quantity={movie.quantity} />
            </div>

            <S.ProductPrice>
              {formatPrice(movie.price * movie.quantity)}
            </S.ProductPrice>

            <ButtonRemoveCartProduct movieId={movie.id} />
          </S.CartContent>
        ))}
      </S.MainContent>
    </S.Container>
  )
}

export default ListCartProductsTableDesktop

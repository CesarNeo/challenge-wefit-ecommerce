import useCart from '../../hooks/cart'
import { formatPrice } from '../../utils'
import ButtonRemoveCartProduct from '../ButtonRemoveCartProduct'
import QuantityActions from '../QuantityActions'
import * as S from './styles'

function ListCartProductsMobile() {
  const { cart } = useCart()

  return cart.map((movie) => (
    <S.Container key={movie.id}>
      <img src={movie.image} alt={movie.title} />

      <div>
        <S.ProductDetails>
          <span>{movie.title}</span>

          <strong>{formatPrice(movie.price)}</strong>

          <ButtonRemoveCartProduct movieId={movie.id} />
        </S.ProductDetails>

        <S.ProductDetailsSubtotal>
          <QuantityActions movieId={movie.id} quantity={movie.quantity} />

          <S.ProductDetailsSubtotalContent>
            <span>Subtotal</span>
            <strong>{formatPrice(movie.price * movie.quantity)}</strong>
          </S.ProductDetailsSubtotalContent>
        </S.ProductDetailsSubtotal>
      </div>
    </S.Container>
  ))
}

export default ListCartProductsMobile

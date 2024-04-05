import cartIcon from '../../assets/icons/cart-icon.svg'
import useCart from '../../hooks/cart'
import { Movie } from '../../types'
import Button from '../Button'
import * as S from './styles'

interface CardMovieProps {
  movie: Movie
}

function CardMovie({ movie }: CardMovieProps) {
  const { addToCart, cart } = useCart()
  const movieInCart = cart.find((item) => item.id === movie.id)

  const moviePrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(movie.price)

  function handleAddToCart() {
    addToCart(movie)
  }

  return (
    <S.Container>
      <S.MovieImage src={movie.image} alt={movie.title} />
      <S.MovieTitle>{movie.title}</S.MovieTitle>
      <S.MoviePrice>{moviePrice}</S.MoviePrice>

      <Button
        type="button"
        onClick={handleAddToCart}
        variant={movieInCart && 'success'}
      >
        <S.ButtonCartIconContainer>
          <img src={cartIcon} alt="Ícone adicionar ao carrinho" />
          <span>{movieInCart?.quantity ?? 0}</span>
        </S.ButtonCartIconContainer>
        Adicionar ao carrinho
      </Button>
    </S.Container>
  )
}

export default CardMovie

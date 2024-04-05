import cartIcon from '../../assets/icons/cart-icon.svg'
import { Movie } from '../../types'
import Button from '../Button'
import * as S from './styles'

interface CardMovieProps {
  movie: Movie
}

function CardMovie({ movie }: CardMovieProps) {
  const moviePrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(movie.price)

  return (
    <S.Container>
      <S.MovieImage src={movie.image} alt={movie.title} />
      <S.MovieTitle>{movie.title}</S.MovieTitle>
      <S.MoviePrice>{moviePrice}</S.MoviePrice>

      <Button type="button">
        <S.ButtonCartIconContainer>
          <img src={cartIcon} alt="Ícone adicionar ao carrinho" />
          <span>0</span>
        </S.ButtonCartIconContainer>
        Adicionar ao carrinho
      </Button>
    </S.Container>
  )
}

export default CardMovie

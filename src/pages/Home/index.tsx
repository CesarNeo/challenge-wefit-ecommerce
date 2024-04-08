import CardMovie from '../../components/CardMovie'
import Loader from '../../components/Loader'
import Search from '../../components/Search'
import useMovies from '../../hooks/use-movies'
import * as S from './styles'

function HomePage() {
  const { movies, search, isLoadingMovies } = useMovies()

  if (isLoadingMovies && !search) {
    return <Loader />
  }

  return (
    <div>
      <Search />

      {isLoadingMovies && <Loader />}

      <S.ContentContainer>
        {movies?.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </S.ContentContainer>
    </div>
  )
}

export default HomePage

import { useQuery } from '@tanstack/react-query'
import { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { listMoviesRequest } from '../../api'
import CardMovie from '../../components/CardMovie'
import Input from '../../components/Input'
import Loader from '../../components/Loader'
import * as S from './styles'

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search-query') ?? ''

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const search = formData.get('search') as string

    setSearchParams((prevParams) => {
      prevParams.set('search-query', search)
      return prevParams
    })
  }

  function handleSearchInputChange(event: FormEvent<HTMLInputElement>) {
    const search = event.currentTarget.value
    if (!search) {
      setSearchParams((prevParams) => {
        prevParams.delete('search-query')
        return prevParams
      })
    }
  }

  function handleSearchInputBlur(event: FormEvent<HTMLInputElement>) {
    const search = event.currentTarget.value
    setSearchParams((prevParams) => {
      prevParams.set('search-query', search)
      return prevParams
    })

    if (!search) {
      setSearchParams((prevParams) => {
        prevParams.delete('search-query')
        return prevParams
      })
    }
  }

  const { data: movies, isLoading: isLoadingMovies } = useQuery({
    queryKey: ['movies', search],
    queryFn: () =>
      listMoviesRequest({
        search,
      }),
  })

  if (isLoadingMovies && !search) {
    return <Loader />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Buscar filme pelo nome"
          name="search"
          onChange={handleSearchInputChange}
          onBlur={handleSearchInputBlur}
        />
      </form>

      {isLoadingMovies && <Loader />}

      <S.ContentContainer>
        {movies?.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </S.ContentContainer>
    </div>
  )
}

export default HomePage

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

import { listMoviesRequest } from '../api'

function useMovies() {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search-query') ?? ''

  const { data: movies, isLoading: isLoadingMovies } = useQuery({
    queryKey: ['movies', search],
    queryFn: () =>
      listMoviesRequest({
        search,
      }),
  })

  return { movies, isLoadingMovies, search }
}

export default useMovies

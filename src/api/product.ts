import { api } from '../lib/axios'
import { Movie } from '../types'

interface ListMoviesRequestParams {
  search?: string
}

export async function listMoviesRequest({ search }: ListMoviesRequestParams) {
  const response = await api.get<Movie[]>('/products', {
    params: {
      title: search,
    },
  })
  return response.data
}

import { api } from '../lib/axios'
import { Movie } from '../types'

interface ListMoviesRequestParams {
  search?: string
}

export async function listMoviesRequest({ search }: ListMoviesRequestParams) {
  const searchFormatted = search
    ?.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  const response = await api.get<Movie[]>('/products', {
    params: {
      title: searchFormatted,
    },
  })

  console.log(response)

  return response.data
}

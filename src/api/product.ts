import { api } from '../lib/axios'
import { Movie } from '../types'

export async function listMoviesRequest() {
  const response = await api.get<Movie[]>('/products')
  return response.data
}

import { useQuery } from '@tanstack/react-query'
import { FormEvent } from 'react'

import { listMoviesRequest } from '../../api'
import CardMovie from '../../components/CardMovie'
import Input from '../../components/Input'
import * as S from './styles'

function HomePage() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const search = formData.get('search') as string
    console.log(search)
  }

  const { data: movies } = useQuery({
    queryKey: ['movies'],
    queryFn: listMoviesRequest,
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Buscar filme pelo nome" name="search" />
      </form>

      <S.ContentContainer>
        {movies?.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
      </S.ContentContainer>
    </div>
  )
}

export default HomePage

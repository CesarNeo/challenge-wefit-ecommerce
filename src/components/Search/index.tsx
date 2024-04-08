import { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import Input from '../Input'

function Search() {
  const [, setSearchParams] = useSearchParams()

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

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Buscar filme pelo nome"
        name="search"
        onChange={handleSearchInputChange}
        onBlur={handleSearchInputBlur}
      />
    </form>
  )
}

export default Search

import { FormEvent } from 'react'

import Input from '../../components/Input'

function HomePage() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const search = formData.get('search') as string
    console.log(search)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Buscar filme pelo nome" name="search" />
      </form>

      <div></div>
    </div>
  )
}

export default HomePage

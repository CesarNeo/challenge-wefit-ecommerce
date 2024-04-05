import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { queryClient } from './lib/react-query'
import { router } from './routes'
import { GlobalStyles } from './styles/global'
import { DEFAULT_THEME } from './styles/themes/default'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={DEFAULT_THEME}>
        <RouterProvider router={router} />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

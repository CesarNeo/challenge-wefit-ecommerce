import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { router } from './routes'
import { GlobalStyles } from './styles/global'
import { DEFAULT_THEME } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App

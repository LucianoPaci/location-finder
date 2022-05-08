import React from 'react'
import { useRoutes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import routes from './routes'
function App() {
  const renderedRoutes = useRoutes(routes)

  return (
    <>
      <CssBaseline />
      {renderedRoutes}
    </>
  )
}

export default App

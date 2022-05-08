import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <LayoutWrapper>
      <Box
        component={'main'}
        sx={{ flexGrow: 1, p: 3, border: '1px solid green' }}
      >
        <Outlet />
      </Box>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled('div')`
  min-height: 100vh;
`

export default Layout

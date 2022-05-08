import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
function ResultPage() {
  const navigate = useNavigate()

  return (
    <Box component={'main'}>
      <Box sx={{ justifyContent: 'end', display: 'flex' }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'black', borderRadius: 8, m: 2 }}
          onClick={() => navigate('/')}
        >
          Exit
        </Button>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <h1>Address</h1>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        MAP
      </Box>
    </Box>
  )
}

export default ResultPage

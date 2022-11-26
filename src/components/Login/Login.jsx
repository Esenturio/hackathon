import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import theme from '../../theme.js'
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  return (
    <Box sx={{display: "flex", height: "100vh"}}>
      <Box sx={{width: '400px', m: 'auto', borderRadius: '25px', mt: "auto", p: 4 , border: `1px solid ${theme.palette.primary.border}`}}> 
        <Typography variant='h4' sx={{mb: 2}}>
          Вход
        </Typography>
        <Box sx={{mb: 3}}>
          <TextField label="Имя" variant="outlined" sx={{width: "100%"}} />
        </Box>
        <Box sx={{mb: 3}}>
          <TextField label="ИНН" variant="outlined" sx={{width: "100%"}}/> 
        </Box>
        <Box>
          <Button variant="contained" onClick={() => navigate('/')}>Отправить</Button> 
        </Box>
      </Box>
    </Box>
  )
}

export default Login
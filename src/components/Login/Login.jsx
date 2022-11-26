import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import theme from '../../theme.js'
import {useNavigate} from 'react-router-dom'
import bigLogo from '../../assets/img/logo-big.png'
import TextField from './../UI/TextField';

function Login() {
  const navigate = useNavigate()

  return (
    <Box sx={{display: "flex", height: "100vh", backgroundColor: theme.palette.primary.light}}>
      <Box sx={{minWidth: '320px', m: 'auto', borderRadius: '12px', p: '32px 16px' , border: `1px solid ${theme.palette.primary.border}`, backgroundColor: '#ffffff'}}> 
        <Box sx={{textAlign: 'center', mb: '32px'}}>
          <img src={bigLogo} alt="logo" />
        </Box>
        <Typography variant='h4' sx={{mb: '24px', textAlign: 'center', fontSize: '24px', fontWeight: '500'}}>
          Войти
        </Typography>
        <Box sx={{mb: '20px'}}>
          <TextField text={'Email'}></TextField>
        </Box>
        <Box sx={{mb: '8px'}}>
          <TextField text={'Пароль'} type='password'></TextField>
        </Box>
        <Typography sx={{fontSize: '12px', textAlign: 'right', color: theme.palette.primary.main, mb: '32px'}}>Забыли пароль?</Typography>
        <Box>
          <Button variant="contained" onClick={() => navigate('/')} sx={{textTransform: 'initial', width: '100%', fontWeight: '400', p: '12px 0', borderRadius: '12px'}}>Войти</Button> 
        </Box>
      </Box>
    </Box>
  )
}

export default Login
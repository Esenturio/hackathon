import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import theme from '../../theme';
import MenuIcon from '@mui/icons-material/Menu';
import logoImg from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';
import cookie from 'cookie'

function Header({handleClick}) {
  const navigate = useNavigate()

  const getCookies = (() => {
    return cookie.parse(document.cookie)
  })

  let logindata = getCookies()

  console.log(logindata);

  return (
    <Box sx={{background: theme.palette.secondary, display: 'flex', alignItems: 'center', p: '20px'}}>
      <IconButton onClick={handleClick} sx={{p: 0, mr: '20px'}}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Box sx={{mr: 'auto', pt: '4px', mr: 'auto'}}>
        <img src={logoImg} alt="logo" />
      </Box>
      <Typography color={theme.palette.primary.main} onClick={() => navigate('/login')}>
        Войти
      </Typography>
    </Box>
  )
}

export default Header
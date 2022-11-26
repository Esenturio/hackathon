import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import theme from '../../theme';
import MenuIcon from '@mui/icons-material/Menu';
import logoImg from '../../assets/img/logo.png'

function Header({handleClick}) {
  return (
    <Box sx={{background: theme.palette.secondary, display: 'flex', alignItems: 'center', p: '20px'}}>
      <IconButton onClick={handleClick} sx={{p: 0, mr: '20px'}}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Box sx={{mr: 'auto', pt: '4px', mr: 'auto'}}>
        <img src={logoImg} alt="logo" />
      </Box>
      <Typography color={theme.palette.primary.main}>
        Войти
      </Typography>
    </Box>
  )
}

export default Header
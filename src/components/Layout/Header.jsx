import React from 'react'
import { Box, IconButton, Typography, Button } from '@mui/material';
import theme from '../../theme';
import MenuIcon from '@mui/icons-material/Menu';
import logoImg from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';
import cookie from 'cookie'
import person from '../../assets/img/person.png'

function Header({handleClick}) {
  const navigate = useNavigate()

  const getCookies = (() => {
    return cookie.parse(document.cookie)
  })

  let logindata = getCookies()

  console.log(logindata);

  return (
    <Box sx={{background: theme.palette.secondary, display: 'flex', alignItems: 'center', p: `${logindata.user !== '' && !logindata.user ? '20px' : '8px'}`}}>
      <IconButton onClick={handleClick} sx={{p: 0, mr: '20px'}}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Box sx={{mr: 'auto', pt: '4px', mr: 'auto'}}>
        <img src={logoImg} alt="logo" />
      </Box>
      {logindata.user !== '' && !logindata.user ?
      <Typography color={theme.palette.primary.main} onClick={() => navigate('/login')}>
        Войти
      </Typography> : 
      <Button>
        <img src={person} alt="user" />
      </Button>
      }
    </Box>
  )
}

export default Header
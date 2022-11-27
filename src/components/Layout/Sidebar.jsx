import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import theme from './../../theme';
import logo from '../../assets/img/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigateBefore } from '@mui/icons-material';

const navbar = [
  {pathname: '/', name: 'Главная'},
  {pathname: '/forum', name: 'Форум'},
  {pathname: '/news', name: 'Новости'},
  {pathname: '/library', name: 'Библиотека'},
]

function Sidebar({open, handleClick}) {
  const {pathname} = useLocation()
  const navigate = useNavigate()

  return (
    <Box sx={{transition: '.3s',width: '88%', height: '100%', background: theme.palette.white.main, position: 'fixed', zIndex: 2, left: open ? '0%' : '-100%', p: '14px', mb: '32px'}}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <IconButton sx={{mr: '10px'}} onClick={handleClick}>
          <CloseIcon/>
        </IconButton>
        <Box>
          <img src={logo} alt="logo" style={{height: '100%', marginTop: '4px'}} />
        </Box>
      </Box>
      
      <List>
      {navbar.map((item, index) => {
          return <ListItem disablePadding key={index} onClick={() => navigate(item.pathname)}>
                  <ListItemButton>
                    <Typography sx={{fontWeight: '500', fontSize: '20px', color: pathname === item.pathname ? theme.palette.primary.main : theme.palette.primary.text}}>{item.name}</Typography>
                  </ListItemButton>
                </ListItem>
      })}
      </List>
    </Box>
  )
}

export default Sidebar
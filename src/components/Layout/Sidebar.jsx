import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import theme from './../../theme';
import logo from '../../assets/img/logo.png'
import { useLocation } from 'react-router-dom';

const navbar = [
  {pathname: '/', name: 'Главная'},
  {pathname: '/forum', name: 'Форум'},
  {pathname: '/news', name: 'Новости'},
  {pathname: '/library', name: 'Библиотека'},
]

function Sidebar({open, handleClick}) {
  const {pathname} = useLocation()

  return (
    <Box sx={{transition: '.3s',width: '88%', height: '100%', background: theme.palette.white.main, position: 'fixed', zIndex: 2, left: open ? '0' : '-100%', p: '14px', mb: '32px'}}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <IconButton sx={{mr: '10px'}}>
          <CloseIcon onClick={handleClick}/>
        </IconButton>
        <Box>
          <img src={logo} alt="logo" style={{height: '100%', marginTop: '4px'}} />
        </Box>
      </Box>

      {navbar.map((item, index) => {
        return <List key={index}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Typography sx={{fontWeight: '500', fontSize: '20px', color: pathname === item.pathname ? theme.palette.primary.main : theme.palette.primary.text}}>{item.name}</Typography>
                  </ListItemButton>
                </ListItem>
              </List>
      })}
    </Box>
  )
}

export default Sidebar
import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import theme from '../../theme';
import MenuIcon from '@mui/icons-material/Menu';

function Header({handleClick}) {
  return (
    <Box sx={{width: '100%', background: theme.palette.secondary, display: 'flex', alignItems: 'center'}}>
      <IconButton sx={{mr: 'auto'}} onClick={handleClick}>
        <MenuIcon></MenuIcon>
      </IconButton>
      
    </Box>
  )
}

export default Header
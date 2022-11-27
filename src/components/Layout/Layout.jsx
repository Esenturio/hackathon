import React, { useState } from 'react'
import { Box, Grid } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

function Layout({children}) {
  const [open, setOpen] = useState(false)
  const {pathname} = useLocation()

  return (
    <Box sx={{width: "100%", maxWidth: '360px'}}>
      {pathname === '/login' || pathname === '/sign-up' ? null : 
        <>
          <Sidebar open={open} handleClick={() => setOpen(false)}></Sidebar>
          <Header handleClick={() => setOpen(true)}></Header>
        </>
      }
      {children}
    </Box>
  )
}

export default Layout
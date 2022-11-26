import React, { useState } from 'react'
import { Box, Grid } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout({children}) {
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{width: "100%"}}>
      {open ? <Sidebar open={open} handleClick={() => setOpen(false)}></Sidebar> : null}
      <Header handleClick={() => setOpen(true)}></Header>
      {children}
    </Box>
  )
}

export default Layout
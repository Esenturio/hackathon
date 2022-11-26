import { Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

function Sidebar({open, handleClick}) {
  console.log(open);
  return (
    <Box sx={{width: '80%', height: '100%', background: 'grey', position: 'fixed', zIndex: 1, right: open ? '0' : '-100%'}}>
      <IconButton>
        <CloseIcon onClick={handleClick}/>
      </IconButton>
    </Box>
  )
}

export default Sidebar
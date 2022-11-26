import { Button, Typography } from '@mui/material'
import React from 'react'
import theme from './../../theme';

function CatTab({text, handleClick, current, id}) {
  return (
    <Button variant={id === current ? 'contained' : 'text'} color="white" sx={{p: '8px 18px', borderRadius: '12px'}} onClick={handleClick}>
      <Typography sx={{fontSize: '14px', textTransform: 'initial'}}>
        {text}
      </Typography>
    </Button>
  )
}

export default CatTab
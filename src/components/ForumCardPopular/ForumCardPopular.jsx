import React from 'react'
import { Box, Typography } from '@mui/material';
import theme from '../../theme';

function ForumCard({img, name, location, date}) {
  return (
    <Box sx={{maxWidth: '300px'}}>
      <Box sx={{borderRadius: '12px', mb: '16px'}}><img src={img} alt="" /></Box>
      <Typography sx={{fontSize:'12px', color: theme.palette.primary.text, opacity: '0.5', mb: '6px'}}>{location} / {date}</Typography>
      <Typography sx={{fontSize: '18px', fontWeight: '500'}}>{name}</Typography>
    </Box>
  )
}

export default ForumCard
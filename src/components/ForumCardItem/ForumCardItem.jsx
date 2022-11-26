import React from 'react'
import { Box, Typography } from '@mui/material';
import theme from './../../theme';

function ForumCardItem({img, name, date, location}) {
  return (
    <Box sx={{display: 'flex', backgroundColor: theme.palette.white.back, borderRadius: '12px', mb: '16px'}}>
      <Box sx={{minWidth: '100px', borderRadius: '12px'}}>
        <img src={img} alt="post-item" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </Box>
      <Box sx={{p: '16px 10px 0 16px'}}>
        <Typography sx={{opacity: '0.5', fontSize: '12px', mb: '10px'}}>{location}</Typography>
        <Typography sx={{fontWeight:'500', fontSize: '14px', mb: '10px', lineHeight: '16.09px'}}>{name}</Typography>
        <Typography sx={{opacity:'0.5', fontSize: '12px'}}>{date}</Typography>
      </Box>
    </Box>
  )
}

export default ForumCardItem
import { Typography, Box, Menu, MenuItem } from '@mui/material'
import {useState} from 'react'

const options = [
  'Show some love to MUI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

function Home() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
        <Box>
          <Typography>jalob.net</Typography>
        </Box>
        <Box>

        <Typography
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >
          Категории
        </Typography>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>Транспорт</MenuItem>
          <MenuItem onClick={handleClose}>Инфраструктура</MenuItem>
          <MenuItem onClick={handleClose}>ЖКХ</MenuItem>
        </Menu>

        </Box>
    </Box>
  )
}

export default Home
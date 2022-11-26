import { Typography, Box, Menu, MenuItem } from '@mui/material'
import React, {useState} from 'react'

const options = [
  'Show some love to MUI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

function Home() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
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
          {/* <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu> */}
        </Box>
    </Box>
  )
}

export default Home
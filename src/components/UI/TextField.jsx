import styled from "@emotion/styled";
import theme from '../../theme'
import { InputBase } from '@mui/material';

const Search = styled("div")(({theme}) => ({
  padding: '5px 12px',  
  borderRadius: '12px',
  width: '100%',
  border: 'none',
  backgroundColor: theme.palette.primary.light,
  height: '40px',
}))

function TextField({text, type='text'}) {
  return (
    <Search>
      <InputBase placeholder={text} type={type} size="small" sx={{mt: '4px', fontSize: '16px', width: '100%', background: 'transparent'}} inputProps={{style: {fontSize: 16}}} ></InputBase>
    </Search>
  )
}

export default TextField
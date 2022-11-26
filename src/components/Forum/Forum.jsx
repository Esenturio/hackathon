import styled from '@emotion/styled';
import { Typography, Box, Menu, MenuItem, TextField } from '@mui/material'
import {useState} from 'react'
import theme from '../../theme';
import CatTab from '../CatTab/CatTab';

const Search = styled("input")(({theme}) => ({
  padding: '12px'
}))

const cats = [
  {id: 0, text: 'Все'},
  {id: 1, text: 'Дороги'},
  {id: 2, text: 'Транспорт'},
  {id: 3, text: 'ЖКХ'},
];

function Home() {
  const [chosen, setChosen] = useState(0)

  return (
    <Box>
      <Box sx={{background: 'linear-gradient(180deg, #0066FF -7.5%, rgba(0, 102, 255, 0) 345.31%);', p: '32px 20px', fontSize: '14px'}}>
        <Box sx={{mb: '20px'}}>
          {cats.map((item, index) => {
            return <CatTab key={index} text={item.text} handleClick={() => setChosen(item.id)} current={chosen} id={item.id}></CatTab>
          })}
        </Box>
        <Box sx={{display: 'flex'}}>
          <TextField label="Выберите категорию"></TextField>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
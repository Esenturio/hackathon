import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../theme.js'
import {useNavigate} from 'react-router-dom'
import bigLogo from '../../assets/img/logo-big.png'
import TextField from './../UI/TextField';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

let startFields = {
  name: "",
  surname: "",
  inn: "",
  email: "",
  password: "",
  repassword: "",
}

function SignUp() {
  const navigate = useNavigate()
  const [fields, setFields] = useState(startFields)

  const changeHandler = (event => {
    setFields((prev) => {
      return {
        ...prev, 
        [event.target.name]: event.target.value
      }
    })
  })

  

  return (
    <Box sx={{display: "flex", height: "100vh", backgroundColor: theme.palette.primary.light, flexDirection: 'column', position: 'relative'}}>
      <Box sx={{minWidth: '320px', m: 'auto', borderRadius: '12px', p: '32px 16px' , border: `1px solid ${theme.palette.primary.border}`, backgroundColor: '#ffffff', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <Box sx={{position: 'relative'}}>
          <IconButton sx={{position: 'absolute', top: '-40px', left: '-23px'}} onClick={() => navigate('/')}>
            <KeyboardArrowLeftIcon sx={{fontSize: '40px', borderRadius: '50%', boxShadow: `0 0 0 4px ${theme.palette.primary.light}`}}></KeyboardArrowLeftIcon>
          </IconButton>
          <Box sx={{textAlign: 'center', mb: '32px'}}>
            <img src={bigLogo} alt="logo" />
          </Box>
          <Typography variant='h4' sx={{mb: '24px', textAlign: 'center', fontSize: '24px', fontWeight: '500'}}>
            Регистрация
          </Typography>
          <Box sx={{mb: '20px'}}>
            <TextField text={'Имя'} name='name' onChange={(event) => changeHandler(event)}></TextField>
          </Box>
          <Box sx={{mb: '20px'}}>
            <TextField text={'Фамилия'} name='surname' onChange={(event) => changeHandler(event)}></TextField>
          </Box>
          <Box sx={{mb: '20px'}}>
            <TextField text={'ИНН'} name='inn' onChange={(event) => changeHandler(event)}></TextField>
          </Box>
          <Box sx={{mb: '20px'}}>
            <TextField text={'Email'} name='email' onChange={(event) => changeHandler(event)}></TextField>
          </Box>
          <Box sx={{mb: '20px'}}>
            <TextField text={'Пароль'} type='password' name='password' onChange={(event) => changeHandler(event)}></TextField>
          </Box>
          <Box sx={{mb: '32px'}}>
            <TextField text={'Повторите пароль'} type='password' name='repassword' onChange={(event) => changeHandler(event)}></TextField>
          </Box>
          <Box sx={{mb: '32px'}}>
            <Button variant="contained" onClick={() => navigate('/')} sx={{textTransform: 'initial', width: '100%', fontWeight: '400', p: '12px 0', borderRadius: '12px'}}>Зарегистрироваться</Button> 
          </Box>
          <Typography sx={{fontSize: '12px', textAlign: 'center'}}>
            Нажимая «Зарегистрироваться» вы соглашаетесь с <Typography component='span' sx={{color: theme.palette.primary.main, fontSize: '12px'}}>Условиями использования</Typography> и <Typography component='span' sx={{color: theme.palette.primary.main, fontSize: '12px'}}>Политикой конфиденциальности</Typography>
          </Typography>
        </Box>
      </Box>
      <Typography sx={{fontSize: '12px', textAlign: 'center', position: 'absolute', bottom: '30px', width: '100%'}}>
        Уже зарегистрировались? <Typography sx={{color: theme.palette.primary.main, fontSize: '12px'}} component='span' onClick={() => navigate('/login')}>Войти</Typography>
      </Typography>
    </Box>
  )
}

export default SignUp
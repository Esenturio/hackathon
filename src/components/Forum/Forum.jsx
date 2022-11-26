import styled from '@emotion/styled';
import { Typography, Box, Menu, MenuItem, TextField, InputBase, IconButton, SvgIcon } from '@mui/material'
import {useState} from 'react'
import theme from '../../theme';
import CatTab from '../CatTab/CatTab';
import postImg from '../../assets/img/post.png'
import post2Img from '../../assets/img/postRoll.png'
import ForumCard from '../ForumCardPopular/ForumCardPopular';
import { Swiper, SwiperSlide } from 'swiper/react';
import ForumCardItem from '../ForumCardItem/ForumCardItem';

const Search = styled("div")(({theme}) => ({
  padding: '0px 12px',
  borderRadius: '12px',
  width: '100%',
  border: 'none',
  backgroundColor: theme.palette.primary.light,
  height: '40px',
}))

const cats = [
  {id: 0, text: 'Все'},
  {id: 1, text: 'Дороги'},
  {id: 2, text: 'Транспорт'},
  {id: 3, text: 'ЖКХ'},
];

const posts = [
  {img: postImg, name: 'Отсуствует лампочки фонаря', location: 'Ленинский район', date: '2 часа назад'},
  {img: postImg, name: 'Отсуствует лампочки фонаря', location: 'Ленинский район', date: '2 часа назад'},
  {img: postImg, name: 'Отсуствует лампочки фонаря', location: 'Ленинский район', date: '2 часа назад'},
  {img: postImg, name: 'Отсуствует лампочки фонаря', location: 'Ленинский район', date: '2 часа назад'}
]

const posts2 = [
  {img: post2Img, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
  {img: post2Img, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
  {img: post2Img, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
]

function Home() {
  const [chosen, setChosen] = useState(0)

  return (
    <Box>

      <Box sx={{background: 'linear-gradient(180deg, #0066FF -7.5%, rgba(0, 102, 255, 0) 345.31%);', p: '32px 16px', fontSize: '14px', mb: '24px'}}>
        <Box sx={{mb: '20px'}}>
          {cats.map((item, index) => {
            return <CatTab key={index} text={item.text} handleClick={() => setChosen(item.id)} current={chosen} id={item.id}></CatTab>
          })}
        </Box>
        <Box sx={{display: 'flex'}}>
          <Search><InputBase placeholder='Выберите категорию' size="small" sx={{mt: '8px', fontSize: '16px'}} inputProps={{style: {fontSize: 14}}} ></InputBase></Search>
          <Box sx={{ml: '16px'}}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{border: '3px solid white', borderRadius: '12px'}}>
              <mask id="mask0_5_383" sx={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
              <rect width="40" height="40" fill="white"/>
              </mask>
              <g mask="url(#mask0_5_383)">
              <path d="M18.3333 31.6667V21.6667H8.33331V18.3333H18.3333V8.33333H21.6666V18.3333H31.6666V21.6667H21.6666V31.6667H18.3333Z" fill="#F9F9FB"/>
              </g>
            </svg>
          </Box>
        </Box>
      </Box>

      <Box sx={{p: '0 16px', mb: '24px'}}>
        <Typography sx={{fontWeight: '500', fontSize: '18px', mb: '16px'}}>Популярные</Typography>
        <Box>
          <Swiper
            spaceBetween={0}
            // centeredSlides={true}
            slidesPerView={1.03}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {posts.map((item, index) => {
              return <SwiperSlide>
                        <ForumCard img={item.img} name={item.name} location={item.location} date={item.date} key={index}></ForumCard>
                      </SwiperSlide>
            })}
          </Swiper>
        </Box>
      </Box>

      <Box sx={{p: '0 16px'}}>
        {posts2.map((item, index) => {
          return <ForumCardItem name={item.name} key={index} img={item.img} location={item.location} date={item.date}></ForumCardItem>
        })}
      </Box>

    </Box>
  )
}

export default Home
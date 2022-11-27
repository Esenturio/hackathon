import React, {useState} from 'react';
import './News.css';
import axios from 'axios'

import first from '../../assets/img/first.png'
import ForumCardItem from './../ForumCardItem/ForumCardItem';

const defNews = [
  {img: first, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
]

export default function News() {
  const [news, setNews] = useState(defNews)
  useState(async () => {
    try {
      let data = await axios.get('https://jalob-net.herokuapp.com/news/')
      setNews(data.data)
    }catch {
      console.log('error');
    }
  })

  return (
    <div className='News'>
      <h2 className='news-1'>Последние новости сайта</h2>
      {news.map((item, index) => {
        return <ForumCardItem key={index} img={item.img} name={item.name} location={item.location} date={item.date}></ForumCardItem>
      })}
    </div>
  )
}
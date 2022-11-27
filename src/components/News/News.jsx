import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';

import first from '../../assets/img/first.png'
import second from '../../assets/img/second.png'
import third from '../../assets/img/third.png'
import ForumCardItem from './../ForumCardItem/ForumCardItem';

const cards = [
  {img: first, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
  {img: second, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
  {img: third, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
  {img: first, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
  {img: second, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
  {img: third, name: 'Яма на дороге у Космопарка, водители будьте бдительны', location: 'Ленинский район', date: '2 часа назад'},
]

export default function News() {
  return (
    <div className='News'>
      <h2 className='news-1'>Последние новости сайта</h2>
      {cards.map((item, index) => {
        return <ForumCardItem key={index} img={item.img} name={item.name} location={item.location} date={item.date}></ForumCardItem>
      })}
    </div>
  )
}
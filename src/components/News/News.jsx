import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';

export default function News() {
  return (
    <div className='News'>
        <h2 className='news-1'>Последние новости сайта</h2>
        <div className='card'>
        <Link className='card-img' to='#'> <img src="/img/Rectangle21.svg" alt="Rectangle21" /></Link>
        <div className='card-text'>
        <p className='text-p3'>Ленинский район</p>
        <h4 className='text-p4'>Разрушенный асфальт в Космопарке был успешно отреставрирован</h4>
        <p className='text-p3'>2 часа назад</p>
        </div>
        </div>

        <div className='card'>
        <Link className='card-img' to='#'> <img src="/img/Rectangle22.svg" alt="Rectangle22" /></Link>
        <div className='card-text'>
        <p className='text-p3'>Техническая работа</p>
        <h4 className='text-p4'>Просим прощения, сайт InЦот не сможет функционировать некоторое время</h4>
        <p className='text-p3'>2 часа назад</p>
        </div>
        </div>

        <div className='card'>
        <Link className='card-img' to='#'> <img src="/img/Rectangle23.svg" alt="Rectangle23" /></Link>
        <div className='card-text'>
        <p className='text-p3'>Октябрьский район</p>
        <h4 className='text-p4'>Исправлены ошибки из-за которых без цвета остались 1000 горожан</h4>
        <p className='text-p3'>2 часа назад</p>
        </div>
        </div>

        <div className='card'>
        <Link className='card-img' to='#'> <img src="/img/Rectangle21.svg" alt="Rectangle21" /></Link>
        <div className='card-text'>
        <p className='text-p3'>Ленинский район</p>
        <h4 className='text-p4'>Разрушенный асфальт в Космопарке был успешно отреставрирован</h4>
        <p className='text-p3'>2 часа назад</p>
        </div>
        </div>

        <div className='card'>
        <Link className='card-img' to='#'> <img src="/img/Rectangle22.svg" alt="Rectangle22" /></Link>
        <div className='card-text'>
        <p className='text-p3'>Техническая работа</p>
        <h4 className='text-p4'>Просим прощения, сайт InЦот не сможет функционировать некоторое время</h4>
        <p className='text-p3'>2 часа назад</p>
        </div>
        </div>

        <div className='card'>
        <Link className='card-img' to='#'> <img src="/img/Rectangle23.svg" alt="Rectangle23" /></Link>
        <div className='card-text'>
        <p className='text-p3'>Октябрьский район</p>
        <h4 className='text-p4'>Исправлены ошибки из-за которых без цвета остались 1000 горожан</h4>
        <p className='text-p3'>2 часа назад</p>
        </div>
        </div>
    </div>
  )
}

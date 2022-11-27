import React from 'react';
import './Main.css';    
import { Link } from 'react-router-dom';
import handshake1 from '../../images/handshake1.png';


export default function Main () {
  return (
    <div className='main'>
        <div>
            <Link to='#'> <img src="/img/Incon.svg" alt="Incon" /></Link>
        </div>
        <div className='text'>
            <h2 className='text-h2'>Будь патриотом, внеси свой вклад в улучшение города</h2>
            <p className='text-p'>
            Подавайте заявку в мэрию по проблемам своего района и в течении 2 недель ваша заявка будет рассмотрена ГорКенешом
            </p>
        </div>
        <div>
            <button className='button'>Подать заявку</button>
        </div>
        <div className='main-2'>
            <div className='hand'>
                {/* <Link to='#'> <img src="/img/Bounding.png" alt="Bounding" /></Link> */}
                <Link to="/"><img src={handshake1} /></Link>
                <h2 className='text-h3'>Взаимодействие</h2>
                <p className='text-p2'>
                Улучшение взаимодействия государства 
                с гражданами
                </p>
            </div>
        </div>

    </div>
  )
}

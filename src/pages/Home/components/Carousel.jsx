
'use client';

import { Carousel } from 'flowbite-react';
// import item1 from '../../../assets/img/master-slide-01.jpg'
// import item2 from '../../../assets/img/master-slide-02.jpg'
// import item3 from '../../../assets/img/master-slide-03.jpg'
import './carousel.sass'

export const Carousell = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[60vh] ">
            <Carousel slide={false}>
                <div className='item1 flex flex-col justify-center items-center gap-5 text-white rtesôgar'>
                    <p className='text-3xl textrespo'>Woemn Collection</p>
                    <h1 className='text-7xl font-bold textrespo2'>NEW ARRIVALS</h1>
                    <button className='border rounded-full bg-white px-8 py-4 text-black font-light respbtn'>SHOP NOW</button>
                </div>

                <div className='item2 flex flex-col justify-center items-center gap-5 text-white rtesôgar'>
                    <p className='text-3xl textrespo'>Woemn Collection</p>
                    <h1 className='text-7xl font-bold textrespo2'>NEW ARRIVALS</h1>
                    <button className='border rounded-full bg-white px-8 py-4 text-black font-light respbtn'>SHOP NOW</button>
                </div>

                <div className='item3 flex flex-col justify-center items-center gap-5 text-white rtesôgar'>
                    <p className='text-3xl textrespo'>Woemn Collection</p>
                    <h1 className='text-7xl font-bold textrespo2'>NEW ARRIVALS</h1>
                    <button className='border rounded-full bg-white px-8 py-4 text-black font-light respbtn'>SHOP NOW</button>
                </div>
                
            </Carousel>
        </div>
    );
}

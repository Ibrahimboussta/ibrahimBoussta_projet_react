import React from 'react';
import './contactSec.sass'

export const ContactSec = () => {
    return (
        <>

            <div className='bg-sec flex justify-center items-center'>
                <h1 className='text-5xl text-white'>Contact</h1>
            </div>

            <div className='flex justify-center items-center gap-3 py-10 px-16 respoContact'>
                <div className=''>
                    <iframe className='rspoMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106358.60374675754!2d-7.786269402734357!3d33.5869724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2eb3a56850d%3A0xc2eb3340cc8a2f84!2sZara!5e0!3m2!1sen!2sma!4v1707916082565!5m2!1sen!2sma" width="660" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='flex flex-col gap-3 w-[50%] p-5 fprmRsepo'>
                    <h1 className='text-2xl font-light'>Send us your message</h1>
                    <input className='w-[100%] p-3' type="text" placeholder='name' />
                    <input className='w-[100%] p-3' type="email" placeholder='Email' />
                    <input className='w-[100%] p-3' type="email" placeholder='Pone' />
                    <textarea className='w-[100%] p-3' name="" id="" cols="20" rows="8" placeholder='Message...'></textarea>
                    <div className='flex justify-start'>
                    <button className='border-none rounded-full bg-black px-10 py-2 text-white text-xl'>Send</button>
                    </div>
                </div>
            </div>

        </>
    );
};


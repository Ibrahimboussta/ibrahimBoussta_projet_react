import React from 'react'
import './firstSection.sass'
import image1 from '../../../assets/img/banner-14.jpg'

export const FirstSectionAbout = () => {
    return (
        <>

            <div className='bg-sec flex justify-center items-center'>
                <h1 className='text-5xl text-white'>Contact</h1>
            </div>

            <div className='flex justify-center items-center gap-6 w-[100%] px-24 py-10 respo_about'>
                <div className='overflow-hidden '>
                    <img className='hover:scale-110 duration-300 img1' src={image1} alt="" />
                </div>

                <div className='w-[100%] flex flex-col gap-8 img1'>
                    <h1 className='font-light text-2xl '>Our story</h1>
                    <p className='w-[90%] text-gray-400 text-md '>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    <p className='para1 px-6 py-8 text-gray-400 '>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. <br /> <br />- Steve Job’s</p>
                </div>
            </div>

        </>
    )
}

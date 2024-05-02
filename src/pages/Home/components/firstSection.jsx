'use client';
import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import { Carousell } from './Carousel';
import banner02 from '../../../assets/img/banner-02.jpg'
import banner03 from '../../../assets/img/banner-03.jpg'
import banner04 from '../../../assets/img/banner-04.jpg'
import banner05 from '../../../assets/img/banner-05.jpg'
import banner07 from '../../../assets/img/banner-07.jpg'
import banner09 from '../../../assets/img/banner-09.jpg'
import banner08 from '../../../assets/img/banner-08.jpg'
import shopItem1 from '../../../assets/img/shop-item-09.jpg'
import blog1 from '../../../assets/img/blog-01.jpg'
import blog2 from '../../../assets/img/blog-02.jpg'
import blog3 from '../../../assets/img/blog-03.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs } from 'flowbite-react';
import Modal from './Modale';
// import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';

export const FirstSection = () => {
    const [data, setData, cart, setCart] = useContext(MyContext)

    const getrgory = data.filter((element, index) => {

        if (element.category == 'SALE') {

        } return element.category == 'SALE'
    }
    )

    const getrgory1 = data.filter((element, index) => {

        if (element.category == 'NEW') {

        } return element.category == 'NEW'
    }
    )

    const getrgory2 = data.filter((element, index) => {

        if (element.category == 'OLD') {

        } return element.category == 'OLD'
    }
    )
    console.log(getrgory);
    const navigate = useNavigate()


    const add = (element) => {
        cart.push(element)
        console.log(cart);
        console.log('mmm');
    }
    return (
        <>
            <Carousell />
            <div className='flex flex-col gap-8 md:flex-row md:p-20 arrivales'>
                <div className='flex flex-col w-full md:w-1/2 gap-8'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner02} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-9 bg-white px-20 py-4 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>DRESSES</button>
                        </div>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner05} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-10 bg-white px-20 py-4 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>SUNGLASSES</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full md:w-1/2 gap-8'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner03} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-10 bg-white px-20 py-4 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>WATCHES</button>
                        </div>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner07} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-9 bg-white px-20 py-4 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>FOOTWEAR</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full md:w-1/2 gap-8'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner04} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-9 bg-white px-20 py-4 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>BAGS</button>
                        </div>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner09} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-10 bg-white px-20 py-4 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>ACCESSORIES</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <h1 className='text-4xl font-semibold'>FEATURED PRODUCTS</h1>
            </div>

            <div className='p-20'>
                <div className='flex justify-center w-full'>
                    <Tabs aria-label="Tabs with underline" style="underline" className='flex justify-center w-full'>
                        <Tabs.Item active title="SALE">
                            <div className='flex flex-wrap justify-center gap-6'>
                                {getrgory.map((element, index) =>
                                    <div key={index} className='flex flex-col gap-2 px-5 py-10 w-full md:w-1/2 lg:w-1/3'>
                                        <div className='h-[300px] w-full group'>
                                            <div className="group relative h-full w-full cursor-pointer overflow-hidden transition-shadow">
                                                <img className="h-full w-full object-cover transition-transform duration-500 transform scale-100 group-hover:scale-110" src={element.img} alt="" />
                                                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                                    <button className="text-white bg-transparent border border-white px-6 py-2 hover:bg-orange-500 hover:border-orange-500 duration-300" onClick={() => navigate(`/product/${element.name}`)}>VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-600 cursor-pointer hover:text-orange-400 text-lg'>{element.name}</h1>
                                        <div className='flex justify-between'>
                                            <h1 className='text-gray-600'>{element.price}</h1>
                                            <button className='border border-orange-500 px-6 py-1 hover:bg-orange-500 hover:text-white duration-300' onClick={() => add(element)}>Add to Cart</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="NEW">
                            <div className='flex flex-wrap justify-center gap-6'>
                                {getrgory1.map((element, index) =>
                                    <div key={index} className='flex flex-col gap-2 px-5 py-10 w-full md:w-1/2 lg:w-1/3'>
                                        <div className='h-[300px] w-full group'>
                                            <div className="group relative h-full w-full cursor-pointer overflow-hidden transition-shadow">
                                                <img className="h-full w-full object-cover transition-transform duration-500 transform scale-100 group-hover:scale-110" src={element.img} alt="" />
                                                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                                    <button className="text-white bg-transparent border border-white px-6 py-2 hover:bg-orange-500 hover:border-orange-500 duration-300" onClick={() => navigate(`/product/${element.name}`)}>VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-600 cursor-pointer hover:text-orange-400 text-lg'>{element.name}</h1>
                                        <div className='flex justify-between'>
                                            <h1 className='text-gray-600'>{element.price}</h1>
                                            <button className='border border-orange-500 px-6 py-1 hover:bg-orange-500 hover:text-white duration-300' onClick={() => add(element)}>Add to Cart</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="OLD">
                            <div className='flex flex-wrap justify-center gap-6'>
                                {getrgory2.map((element, index) =>
                                    <div key={index} className='flex flex-col gap-2 px-5 py-10 w-full md:w-1/2 lg:w-1/3'>
                                        <div className='h-[300px] w-full group'>
                                            <div className="group relative h-full w-full cursor-pointer overflow-hidden transition-shadow">
                                                <img className="h-full w-full object-cover transition-transform duration-500 transform scale-100 group-hover:scale-110" src={element.img} alt="" />
                                                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                                                    <button className="text-white bg-transparent border border-white px-6 py-2 hover:bg-orange-500 hover:border-orange-500 duration-300" onClick={() => navigate(`/product/${element.name}`)}>VIEW DETAILS</button>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className='text-gray-600 cursor-pointer hover:text-orange-400 text-lg'>{element.name}</h1>
                                        <div className='flex justify-between'>
                                            <h1 className='text-gray-600'>{element.price}</h1>
                                            <button className='border border-orange-500 px-6 py-1 hover:bg-orange-500 hover:text-white duration-300'>Add to Cart</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </div>

            <section className='p-20 bg-[#F0F0F0]'>
                <div className='flex flex-col md:flex-row gap-10 bg-respo'>
                    <div className='overflow-hidden bgShop shadow-xl'>
                        <div className='flex flex-col gap-4 justify-center items-center h-[100%] text-white'>
                            <h1 className='text-4xl '>The Beauty</h1>
                            <h1 className='text-7xl font-semibold respoText'>LOOKBOOK</h1>
                            <a className='underline text-xl '>View Collection</a>
                        </div>
                    </div>

                    <div className='flex flex-col items-center bgtext relative shadow-xl'>
                        <img src={shopItem1} alt="" />
                        <div className='absolute bottom-36 respobtm'>
                            <h1 className='text-3xl font-light respoText1'>Boxy2 T-Shirt with Roll Sleeve</h1>
                            <h3 className='text-center font-light text-2xl respoText1'>$20.00</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-20'>
                <h1 className='text-center text-4xl font-semibold'>OUR BLOG</h1>
                <div className='flex flex-col md:flex-row gap-8 py-10 blog_Respo'>
                    <div className='flex flex-col gap-4'>
                        <img src={blog1} alt="" />
                        <h1 className='text-2xl'>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <p className='text-gray-500 font-light'>by fashe-theme Admin on Dec 28,2017</p>
                        <p className='text-gray-500 font-light w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <img src={blog2} alt="" />
                        <h1 className='text-2xl'>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <p className='text-gray-500 font-light'>by fashe-theme Admin on Dec 28,2017</p>
                        <p className='text-gray-500 font-light w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <img src={blog3} alt="" />
                        <h1 className='text-2xl'>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <p className='text-gray-500 font-light'>by fashe-theme Admin on Dec 28,2017</p>
                        <p className='text-gray-500 font-light w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                </div>
            </section>

            <div>
                <h1 className='text-center text-4xl font-bold rsepoints'>@ FOLLOW US ON INSTAGRAM</h1>
            </div>
            <section className='p-20 respo'>
                <div className='flex justify-around items-center respofree'>
                    <div>
                        <h1 className='font-light text-2xl text-center'>Free Delivery Worldwide</h1>
                        <p className='italic font-light'>Mirum est notare quam littera gothica</p>
                    </div>

                    <div>
                        <h1 className='font-light text-2xl text-center'>30 Days Return</h1>
                        <p className='italic font-light'>Simply return it within 30 days for an exchange.</p>
                    </div>

                    <div>
                        <h1 className='font-light text-2xl text-center'>Store Opening</h1>
                        <p className='italic font-light'>Shop open from Monday to Sunday</p>
                    </div>
                </div>
            </section>
        </>

    );
}

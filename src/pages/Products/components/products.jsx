import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import { useParams } from 'react-router-dom';
import './product.sass'

export const Products = () => {

    const [data, setData, cart, setCart] = useContext(MyContext)
    // setData("")
    const { name } = useParams()

    const filterProduct = data.filter((data) => data.name === name)
    console.log(filterProduct);

    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log("hello");
    })

    const add = (element) => {
        cart.push(element)
        console.log(cart);
        console.log('mmm');
    }
    return (
        <>
            <div className=' p-20 prdctSec'>
                <div className='flex productResp'>
                    {
                        filterProduct.map((element, index) =>
                            <>
                                <div className="">
                                    <div className='flex w-[50vw] productDetail'>
                                        <div className='flex flex-col gap-5 overflow-hidden w-[18%] prdct'>
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500 prdcts' src={element.img} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500 prdcts' src={element.img} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500 prdcts' src={element.img} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500 prdcts' src={element.img} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500 prdcts' src={element.img} alt="" />
                                            <img className='w-[70%] border-2 border-black hover:scale-110 duration-500 prdcts' src={element.img} alt="" />
                                        </div>
                                        <img className='h-[100vh] w-[35vw] imgPrdct' src={element.img} alt="" />
                                    </div>

                                </div>

                                <div className='flex flex-col gap-7 py-10 w-[50vw]'>
                                    <h1 className='text-3xl responame'> {element.name}</h1>
                                    <h3 className='text-3xl responame'>{element.price}</h3>
                                    <p className='text-l text-gray-600 responame'>{element.desc}</p>
                                    <div className='flex gap-2'>
                                        <button className='border border-orange-500 px-4 py-1 hover:bg-orange-500 duration-500'>S</button>
                                        <button className='border border-orange-500 px-4 py-1 hover:bg-orange-500 duration-500'>M</button>
                                        <button className='border border-orange-500 px-4 py-1 hover:bg-orange-500 duration-500'>X</button>
                                        <button className='border border-orange-500 px-4 py-1 hover:bg-orange-500 duration-500'>XL</button>
                                    </div>

                                    <div className='flex gap-3 '>
                                        <button className='bg-gray-500 h-[4vh] w-[4vw] responame'></button>
                                        <button className='bg-orange-500 h-[4vh] w-[4vw] responame'></button>
                                        <button className='bg-gray-300 h-[4vh] w-[4vw] responame'></button>
                                    </div>
                                    <div>
                                        <div className='flex justify-around items-center gap-4  w-[60%] responame1 p-1 rounded-full'>

                                            <div className='flex items-center gap-3 bg-slate-300 p-1 rounded-full'>
                                            <button onClick={() => setCount(count + 1)} className=' px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>+</button>
                                        <h1>{count}</h1>
                                        <button onClick={() => setCount(count - 1)} disabled={count === 1} className=' px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>-</button>
                                            </div>

                                            <div>
                                                <button onClick={() => add(element)} className='border border-black px-5 py-2 rounded-full'>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-between items-center w-[70%] text-slate-500 text-sm descResp'>
                                        <p className='responame2'>Brand: MyVendor</p>
                                        <p className='responame2'>Categories: boxy , Shirts , sleeveless</p>
                                    </div>

                                    <div className='borderSec'>
                                    </div>

                                    <div className='flex flex-col gap-4'>
                                        <h1 className='text-xl hover:text-orange-400'>Description</h1>
                                        <p className='text-l text-slate-600 responame'>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                                            Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
                                            Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat</p>
                                    </div>

                                </div>
                            </>
                        )
                    }
                </div>
            </div>

        </>
    );
};


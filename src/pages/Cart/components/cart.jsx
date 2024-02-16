import React, { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import './cart.sass'

export const Cartt = () => {

    const [data, setData, cart, setCart] = useContext(MyContext)

    const [count, setCount] = useState(1)


    const deleteItem = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };
    return (
        <>
            <div className='flex flex-col gap-3'>
                <div className='bg-cart flex justify-center items-center'>
                    <h1 className='text-5xl text-white'>Contact</h1>
                </div>
                <div className='flex flex-col gap-3 py-10 px-2'>
                    <div className='flex items-center justify-around border-b-2 border-black p-4'>
                        <h1 className='text-2xl font-semibold'>image item</h1>
                        <h1 className='text-2xl font-semibold'>item name</h1>
                        <h1 className='text-2xl font-semibold'>item Quantity</h1>
                        <h1 className='text-2xl font-semibold'>item price</h1>
                    </div>
                    {
                        cart.map((element, index) =>
                            <div key={index} className='flex items-center justify-around py-2  border border-3 border-gray-400'>
                                <img className='w-[5%]' src={element.img} alt="" />
                                <h1>{element.name}</h1>
                                <div className='flex items-center gap-4 bg-slate-300 w-[10%] p-1 rounded-full'>

                                    <div className='flex items-center gap-3 '>
                                        <button onClick={() => setCount(count + 1)} className=' px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>+</button>
                                        <h1>{count}</h1>
                                        <button onClick={() => setCount(count - 1)} disabled={count === 1} className=' px-5 rounded-full text-2xl hover:bg-slate-200 duration-300'>-</button>
                                    </div>
                                </div>
                                <h3>{element.price}</h3>
                                <button onClick={() => deleteItem(index)} className='border border-gray-500 px-5 py-2 rounded-full'>Delete</button>
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    );
};


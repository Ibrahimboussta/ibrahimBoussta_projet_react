import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate, useParams } from 'react-router-dom';
import './shopSec.sass'

export const ShopSec = () => {

    const [data, setData] = useContext(MyContext)
    const { name } = useParams()
    const [filterProduct, setFilterProduct] = useState([]);
    const [filterProduct1, setFilterProduct1] = useState([]);
    const [filterProduct2, setFilterProduct2] = useState([]);
    let [searchTerm, setSearchTerm] = useState('');


    const [filterArray, setFilterArray] = useState(0);


    console.log(filterProduct);

    const [count, setCount] = useState(1)
    const [count1, setCount1] = useState(0)

    useEffect(() => {
        console.log("hello");
    })


    const Sale = () => {
        const filteredProducts = data.filter((item) => item.category === 'SALE');
        setFilterProduct(filteredProducts);
        setFilterProduct1([]); // Reset other filters
        setFilterProduct2([]);
        setFilterArray(filteredProducts.length);
    };

    const New = () => {
        const filteredProducts = data.filter((item) => item.category === 'NEW');
        setFilterProduct1(filteredProducts);
        setFilterProduct([]); // Reset other filters
        setFilterProduct2([]);
        setFilterArray(filteredProducts.length);
    };

    const Old = () => {
        const filteredProducts = data.filter((item) => item.category === 'OLD');
        setFilterProduct2(filteredProducts);
        setFilterProduct([]); // Reset other filters
        setFilterProduct1([]);
        setFilterArray(filteredProducts.length);
    };

    const navigate = useNavigate()



    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        filterProducts(e.target.value);
    };
    // if (setSearchTerm = '') {
    //     setFilterProduct([]); // Reset other filters
    //     setFilterProduct1([]);
    //     setFilterProduct2([]);
    // }

    const filterProducts = (searchTerm) => {
        const filteredProducts = data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilterProduct(filteredProducts);
        setFilterProduct1([]);
        setFilterProduct2([]);
        if (searchTerm == '') {
            setFilterProduct([]);
            setFilterProduct1([]);
            setFilterProduct2([]);
        }
    };



    return (
        <>
            <div className='shop flex justify-center items-center'>
                <h1 className='text-5xl text-white font-bold'>Products</h1>
            </div>

            <div className='flex p-5'>
                <div className='p-20 flex flex-col gap-8'>
                    <div className='flex flex-col gap-3'>
                        <h1>Categories</h1>
                        <p onClick={() => Sale()} className='border border-black w-[40%] px-5 py-1 cursor-pointer'>Sale</p>
                        <p onClick={() => New()} className='border border-black  w-[40%] px-5 py-1 cursor-pointer'>New</p>
                        <p onClick={() => Old()} className='border border-black  w-[40%] px-5 py-1 cursor-pointer'>Old</p>
                    </div>

                    <div>
                        <h1>color</h1>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p>Black</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p>Gray</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p>Red</p>
                        </div>
                    </div>

                    <div>
                        <h1>price</h1>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p>0-20</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p>20-40</p>
                        </div>
                    </div>


                    <div >
                        <h1>Size</h1>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p>L</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p>M</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p>S</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p>XL</p>
                        </div>
                    </div>
                    <div>
                        <input
                            type='text'
                            className='p-4'
                            placeholder='Search'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>


                <div className='py-20'>
                    <div className='flex gap-3'>

                        {/* <div className='flex'>
                            {filterProduct.map((element, index) => (
                                <div key={index}>
                                    <img src={element.img} alt="" />
                                    <h1>{element.name}</h1>
                                    <h1>{element.price}</h1>
                                </div>
                            ))}
                        </div> */}

                        {filterProduct.map((element, index) => (
                            <div>
                                <div className=' h-fit  group '>
                                    <div class="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                        <div class="h-96">
                                            <img class="w-full h-full object-cover transition-transform respoMap duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.img} alt="" />
                                        </div>
                                        <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                        <div class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-white hover:bg-red-500 hover:text-white duration-300"
                                            // onClick={() => add(element)}
                                            >ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <h1 onClick={() => navigate(`/product/${element.name}`)} className='text-gray-600 cursor-pointer hover:text-orange-400 text-lg duration-300'>{element.name}</h1>
                                <h1 className='text-gray-600 cursor-pointer'>{element.price}</h1>
                            </div>

                        ))}
                    </div>

                    <div className='flex gap-3'>
                        {filterProduct1.map((element, index) => (
                            <div>
                                <div className=' h-fit  group '>
                                    <div class="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                        <div class="h-96">
                                            <img class=" object-cover transition-transform respoMap duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.img} alt="" />
                                        </div>
                                        <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                        <div class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-white hover:bg-red-500 hover:text-white duration-300"
                                            // onClick={() => add(element)}
                                            >ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <h1 onClick={() => navigate(`/product/${element.name}`)} className='text-gray-600 cursor-pointer hover:text-orange-400 text-lg duration-300'>{element.name}</h1>
                                <h1 className='text-gray-600 cursor-pointer'>{element.price}</h1>
                            </div>
                        ))}
                    </div>

                    <div className='flex gap-3'>
                        {filterProduct2.map((element, index) => (
                            <div>
                                <div className=' h-fit  group '>
                                    <div class="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                        <div class="h-96">
                                            <img class=" object-cover transition-transform respoMap duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.img} alt="" />
                                        </div>
                                        <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                        <div class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-white hover:bg-red-500 hover:text-white duration-300"
                                            // onClick={() => add(element)}
                                            >ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                                <h1 onClick={() => navigate(`/product/${element.name}`)} className='text-gray-600 cursor-pointer hover:text-orange-400 text-lg duration-300'>{element.name}</h1>
                                <h1 className='text-gray-600 cursor-pointer'>{element.price}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};


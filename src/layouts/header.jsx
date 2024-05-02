
// 'use client';

// import { Button, Navbar } from 'flowbite-react';
// import { FaRegUserCircle } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';




// export function Header() {


//     const navigate = useNavigate()
//     return (
//         <Navbar fluid rounded className='border-b-2 p-5 '>
//             <Navbar.Brand className='px-5'>
//                 <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
//             </Navbar.Brand>
//             <div className="flex items-center md:order-2 px-5">
//             <Navbar.Collapse>
//                 <Navbar.Link href="#">
//                 <FaRegUserCircle className='text-3xl' />
//                 </Navbar.Link>
//                 <Navbar.Link href="#">


//                 </Navbar.Link>

//             </Navbar.Collapse>
//             </div>
//             <Navbar.Collapse>
//                 <Navbar.Link  onClick={() => navigate('/')} className='cursor-pointer'>
//                     Home
//                 </Navbar.Link>
//                 <Navbar.Link  onClick={() => navigate('/about')} className='cursor-pointer'>About</Navbar.Link >
//                 <Navbar.Link  onClick={() => navigate('/shop')} className='cursor-pointer'>Shop</Navbar.Link>
//                 <Navbar.Link onClick={() => navigate('/contact')} className='cursor-pointer' >Contact</Navbar.Link>
//             </Navbar.Collapse>

//         </Navbar>
//     );
// }


'use client';

import { Button, Navbar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import './header.sass'
import { useState } from 'react';
import { Offcanvas } from 'bootstrap';


export function Header() {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar fluid rounded className='border-gray-300 border-b-2 p-5 '>
        <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Fashe</span>
        </Navbar.Brand>
        <div className="flex gap-2 md:order-2">
            <FaRegUserCircle onClick={() => navigate('/login')} className='text-3xl' />
            <MdOutlineShoppingBag onClick={() => navigate('/cart')} className='text-3xl' />
        </div>
        <Navbar.Collapse className="md:flex md:gap-5 md:items-center md:justify-end">
            <Navbar.Link onClick={() => navigate('/')} className='cursor-pointer'>
                Home
            </Navbar.Link>
            <Navbar.Link onClick={() => navigate('/about')} className='cursor-pointer'>About</Navbar.Link>
            <Navbar.Link onClick={() => navigate('/shop')} className='cursor-pointer'>Shop</Navbar.Link>
            <Navbar.Link onClick={() => navigate('/contact')} className='cursor-pointer'>Contact</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    
    );
}

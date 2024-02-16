
import React, { createContext, useState } from 'react'
import product1 from '../assets/img/item-15.jpg'
import product2 from '../assets/img/item-13.jpg'
import product3 from '../assets/img/item-04.jpg'
import product4 from '../assets/img/item-11.jpg'
import product5 from '../assets/img/item-05.jpg'
import product6 from '../assets/img/item-06.jpg'
import product7 from '../assets/img/item-07.jpg'
import product8 from '../assets/img/item-08.jpg'
import product9 from '../assets/img/item-09.jpg'
import product10 from '../assets/img/item-10.jpg'
import product11 from '../assets/img/item-11.jpg'
import product12 from '../assets/img/item-12.jpg'
import product13 from '../assets/img/item-13.jpg'
// import product14 from '../assets/img/item-14.jpg'
// import product15 from '../assets/img/item-15.jpg'
// import product16 from '../assets/img/item-16.jpg'
// import product17 from '../assets/img/item-17.jpg'



export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            name: 'Boxy7 T-Shirt with Roll Sleeve',
            desc: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....',
            img: product1,
            price: '$20.00',
            taile: ['s', 'm', 'l', 'xl'],
            category: 'NEW'
        },

        {
            name: 'Boxy6 T-Shirt with Roll Sleeve',
            desc: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....',
            img: product2,
            price: '$30.00',
            taile: ['s', 'm', 'l', 'xl'],
            category: 'OLD'

        },

        {
            name: 'Boxy5 T-Shirt with Roll Sleeve',
            desc: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....',
            img: product3,
            price: '$10.00',
            taile: ['s', 'm', 'l', 'xl'],
            category: 'SALE'

        },

        {
            name: 'Boxy4 T-Shirt with Roll Sleeve',
            desc: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....',
            img: product4,
            price: '$12.00',
            taile: ['s', 'm', 'l', 'xl'],
            category: 'SALE'
        },


        {
            name: 'item5',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img : product5,
            price: '$30.00',
            category: 'NEW'

        },

        {
            name: 'item6',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img : product6,
            price: '$25.00',
            category: 'NEW'
        },

        {
            name: 'item7',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img : product7,
            price: '$12.00',
            category: 'SALE'
        },

        {
            name: 'item8',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img : product8,
            price: '$5.00',
            category: 'NEW'
        },

        {
            name: 'item9',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img : product9,
            price: '$13.00',
            category: 'OLD'
        },

        {
            name: 'item10',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img : product10,
            price: '$18.00',
            category: 'OLD'
        },
        {
            name: 'item11',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img : product11,
            price: '$33.00',
            category: 'OLD'
        },
        {
            name: 'item12',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img : product12,
            price: '$14.00',
            category: 'SALE'
        },
        // {
        //     name: 'item13',
        //     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
        //     img : product13,
        //     price : '$14.00',
        //     category: 'SALE'
        // },
        // {
        //     name: 'item14',
        //     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
        //     img : product14,
        //     price : 40.00
        // },
        // {
        //     name: 'item15',
        //     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
        //     img : product15,
        //     price : 50.00
        // },
        // {
        //     name: 'item16',
        //     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
        //     img : product16,
        //     price : 60.00
        // },
        // {
        //     name: 'item17',
        //     desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
        //     img : product17,
        //     price : 70.00
        // }

        

    ])

    const [cart, setCart] = useState([])

    return (
        <>
            <MyContext.Provider value={[data, setData, cart, setCart]} >
                {children}
            </MyContext.Provider>
        </>
    )
}

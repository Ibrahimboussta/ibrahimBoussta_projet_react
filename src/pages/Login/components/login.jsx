import { Link, useNavigate } from 'react-router-dom'
import './login.sass'


export const Logine = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='flex gap-8 p-20 formlogin'>
                <div className='py-16'>
                    <div className='border-2 border-gray-200 p-5 w-[40vw] h-[40vh] flex flex-col gap-4 shadow-lg rounded-xl respo1' >
                        <h1>New Customer</h1>
                        <h6 className='font-semibold'>Register Account</h6>
                        <p>By creating an account you will be able to shop faster,
                            be up to date on an order's status,
                            and keep track of the orders you have previously made.</p>
                        <button onClick={() => navigate(`/sign-up`)} className=' h-[6vh] w-[12vw] bg-stone-800 text-slate-100 respoBtn'>CONTINUE</button>
                    </div>
                </div>
                <div className='border-2 border-gray-200 p-5 w-[50vw] h-[60vh] flex flex-col gap-4 shadow-lg rounded-xl respo2'>
                    <h1 className='text-4xl font-lg'>Returning Customer</h1>
                    <h6 className='font-semibold text-lg'>I am a returning customer</h6>
                    <div className='flex flex-col gap-2'>
                        <label className='text-bold' htmlFor="Email">Email</label>
                        <input className='border-1 rounded border-gray-500 w-[30vw] h-[6vh] p-2 forprspt' type="email" placeholder='Email' />
                    </div>
                    <div className='flex flex-col gap-2 pt-2'>
                        <label className='text-bold' htmlFor="Password">Password</label>
                        <input className='border-1 rounded border-gray-500 w-[30vw] h-[6vh] p-2 forprspt' type="password" placeholder='Password' />
                        <p>Forgot your password?</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className=' h-[6vh] w-[12vw] bg-stone-800 text-slate-100 respobtnn'><Link to={`/`} className='pb-2 no-underline text-white text-slate-950 hover:text-orange-500'> SIGN-UP</Link>
                        </button>
                        <Link to={`/`} className='pb-2 no-underline text-slate-950 hover:text-orange-500'> or Return to Store</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
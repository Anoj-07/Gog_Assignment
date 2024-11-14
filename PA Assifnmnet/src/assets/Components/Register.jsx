import React from 'react'
import  { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
    <form action=""
    className='flex flex-col justify-center items-center gap-5 mt-10'>
        <h1 className="font-bold">sign Up</h1>
        <div className='border border-black p-10 flex flex-col gap-5'> 
            <p>User Name : <input className='border border-black p-2' type="text" placeholder='userName'/></p>
            <p>Email : <input className='border border-black p-2'  type="email" placeholder='Email' /></p>
            <p>Mobile : <input className='border border-black p-2'  type="number" placeholder='Phone number' /></p>
            <p>Password : <input className='border border-black p-2'  type="password" placeholder='Password' /></p>
            <p>retype Password : <input className='border border-black p-2'  type="password" placeholder='retype Password' /></p>

            <p className='flex flex-row justify-start text-xs'>
                <Link to='/login' className='bg-black text-white font-bold p-2'>Login</Link>
            </p>
            <div className='flex flex-row justify-center'>
                <button className='bg-blue-500 text-white p-2 rounded-lg'>
                    Register
                </button>
            </div>
        </div>
    </form>
</div>
  )
}

export default Register
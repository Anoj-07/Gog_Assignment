import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <form action=""
        className='flex flex-col justify-center items-center gap-5 mt-10'>
            <h1 className="font-bold">Login</h1>
            <div className='border border-black p-10 flex flex-col gap-5'> 
                <p>User Name : <input className='border border-black p-2' type="text" placeholder='userName'/></p>
                <p>Password : <input className='border border-black p-2'  type="password" placeholder='Password' /></p>

                <p className='flex flex-row justify-between text-xs'>
                    <Link to={''}>forgot password?</Link>
                    <Link to={'/signup'}>create new account</Link>
                </p>
                <div className='flex flex-row justify-center'>
                    <button className='bg-blue-500 text-white p-2 rounded-lg'>
                        Login
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login
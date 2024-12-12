import React from 'react'

const Login = () => {
  return (
    <div className='flex p-0.5 flex-col items-center justify-center min-w-96 rounded-lg mx-auto border-2 border-black border-opacity-60'>
      <div className='w-full p-6 rounded-lg bg-[rgba(169,166,178,0.5)] bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-opacity-80'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'> 
            Login
            <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' />
            </div>
            <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Don't"} have an account? 
            </a>
            <div>
                <button className='btn btn-active btn-block btn-sm mt-2'>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
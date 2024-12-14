import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const {loading, signup} = useSignup()

    const handleSubmit = async (e)=> {
        e.preventDefault();
        await signup(inputs);
    }

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender});
    }


  return (
    <div className='flex p-0.5 flex-col items-center justify-center min-w-96 rounded-lg mx-auto border-2 border-black border-opacity-60'>
      <div className='w-full p-6 rounded-lg bg-[rgba(169,166,178,0.5)] bg-clip-padding backdrop-filter backdrop-blur-lg backdrop-opacity-80'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'> 
            Sign Up
            <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input 
                    type='text' 
                    placeholder='Enter Name' 
                    className='w-full input input-bordered h-10' 
                    value={inputs.fullName}
                    onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
                />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input 
                    type='text' 
                    placeholder='Enter Username' 
                    className='w-full input input-bordered h-10' 
                    value={inputs.userName}
                    onChange={(e)=> setInputs({...inputs, userName: e.target.value})}
                />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input 
                    type='password' 
                    placeholder='Enter Password' 
                    className='w-full input input-bordered h-10' 
                    value={inputs.password}
                    onChange={(e)=> setInputs({...inputs, password: e.target.value})}
                />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input 
                    type='password' 
                    placeholder='Confirm Password' 
                    className='w-full input input-bordered h-10' 
                    value={inputs.confirmPassword}
                    onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}
                />
            </div>
            
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            
            <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account? 
            </Link>
            <div>
                <button className='btn btn-active btn-block btn-sm mt-2' disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup

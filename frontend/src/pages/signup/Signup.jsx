import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading,signup}=useSignup();
  const handleCheckBoxChange=(gender)=>{
setInputs({...inputs,gender})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-cyan-500'> Chattyyy</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>FullName</span>
            </label>
            <input type='text' placeholder='Enter Your Name' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter Your Password' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Your Password' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectGender={inputs.gender}/>
          <Link to='/login' className='text-sm hover:underline hover:text-blue-600 text-black mt-2 inline-block'>
            Already have an account?
          </Link>
          <div>
          <button className='btn btn-block btn-sm mt-2 border bg-sky-500 border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup












// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
//   <h1 className='text-3xl font-semibold text-center text-gray-300'>
//     SignUp
//     <span className='text-cyan-500'> Chattyyy</span>
//   </h1>
// <form>
// <div>
// <label className='label p-2'>
//   <span className='text-base label-text'>FullName</span>
// </label>
// <input type='text' placeholder='Enter Your Name' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'/>
//   </div>
//   <div>
// <label className='label p-2'>
//   <span className='text-base label-text'>Username</span>
// </label>
// <input type='text' placeholder='Enter Username' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'/>
//   </div>
//   <div>
// <label className='label p-2'>
//   <span className='text-base label-text'>Password</span>
// </label>
// <input type='password' placeholder='Enter Your Password' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'/>
//   </div>
//   <div>
// <label className='label p-2'>
//   <span className='text-base label-text'>Confirm Password</span>
// </label>
// <input type='password' placeholder='Confirm Your Password' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'/>
//   </div>
// <GenderCheckBox/>
//   <a href='#' className='text-sm hover:underline hover:text-blue-600 text-black mt-2 inline-block'>
//     Already have an account?
//   </a>
//   <div>
//     <button className='btn btn-block btn-sm mt-2 bg-cyan-500'>SignUp</button>
//   </div>
// </form>
// </div>
//     </div>
//   )
// }

// export default Signup
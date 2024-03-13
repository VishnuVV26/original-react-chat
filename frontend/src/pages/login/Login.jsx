import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

const[username,setUsername]=useState('');
const[password,setPassword]=useState('');

const{loading,login}=useLogin();

const handleSubmit=async(e)=>{
  e.preventDefault();
  await login (username,password);

}

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
  <h1 className='text-3xl font-semibold text-center text-gray-300'>
    Login
    <span className='text-cyan-500'> Chattyyy</span>
  </h1>
<form onSubmit={handleSubmit}>
  <div>
<label className='label p-2'>
  <span className='text-base label-text'>Username</span>
</label>
<input type='text' placeholder='Enter Your Name' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>
  </div>
  <div>
<label className='label p-2'>
  <span className='text-base label-text'>Password</span>
</label>
<input type='password' placeholder='Enter Your Password' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
  </div>
  <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 text-black mt-2 inline-block'>
    Don't have an account?
  </Link>
  <div>
  <button className='btn btn-block btn-sm mt-2 border bg-sky-500 border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Login"}
						</button>   </div>
</form>
</div>
    </div>
  )
}

export default Login





//code started snippet
// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0'>
//   <h1 className='text-3xl font-semibold text-center text-gray-300'>
//     Login
//     <span className='text-cyan-500'> Chattyyy</span>
//   </h1>
// <form>
//   <div>
// <label className='label p-2'>
//   <span className='text-base label-text'>Username</span>
// </label>
// <input type='text' placeholder='Enter Your Name' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'/>
//   </div>
//   <div>
// <label className='label p-2'>
//   <span className='text-base label-text'>Password</span>
// </label>
// <input type='password' placeholder='Enter Your Password' className='input w-full input-bordered h-10 bg-transparent border-1 border-black text-cyan-500'/>
//   </div>
//   <a href='#' className='text-sm hover:underline hover:text-blue-600 text-black mt-2 inline-block'>
//     Don't have an account?
//   </a>
//   <div>
//     <button className='btn btn-block btn-sm mt-2 bg-cyan-500'>Login</button>
//   </div>
// </form>
// </div>
//     </div>
//   )
// }

// export default Login
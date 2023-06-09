import {useState} from 'react';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Oauth from '../components/Oauth';

function SignUp() {


  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
  })

  const [showPassword,setShowPassword]=useState(false);

  const {name,email,password} = formData;


  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value

    }))
  }





  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>

      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>

        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img className='w-full rounded-2xl' src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="key" />
        </div>


        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form >
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' type="email" name='name' value={name} onChange={e=>onChange(e)} placeholder='Full name' />
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' type="email" name='email' value={email} onChange={e=>onChange(e)} placeholder='Email Address' />
          <div className='relative'>
         
          <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' type={showPassword?'text':"password"} name='password' value={password} onChange={e=>onChange(e)} placeholder='Password' />
         
          <span className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>{showPassword?<AiFillEyeInvisible />:<AiFillEye/>}</span>

          </div>
          <div className='flex justify-center text-sm sm:text-lg'>
            <p className='mb-6'>Have an account ? <Link to='/sign-in' className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out font-bold'>Sign in</Link></p>
            {/* <p>
              <Link to='/forgot-password' className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out font-bold'>Forgot Password ?</Link>
            </p> */}
          </div>
          <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition ease-in-out duration-150 hover:shadow-lg active:bg-blue-800' type='submit'>Sign up</button>
         <div className='py-4 flex items-center  before:border-t before:flex-1  before:border-gray-300 after:border-t after:border-gray-300 after:flex-1'>
          <p className='text-center font-semibold mx-4'>
            OR
          </p>
         </div>
         <Oauth/>
          </form>
        </div>

      </div>
    </section>
  )
}

export default SignUp
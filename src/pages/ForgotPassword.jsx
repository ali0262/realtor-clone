import {useState} from 'react';
import {Link} from 'react-router-dom';
import Oauth from '../components/Oauth';

function ForgotPassword () {


  const [email,setEmail]=useState('')



 


  function onChange(e){

    setEmail(e.target.value);

  }





  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>

      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>

        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img className='w-full rounded-2xl' src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="key" />
        </div>


        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form >
            <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' type="email" name='email' value={email} onChange={e=>onChange(e)} placeholder='Email Address' />
        
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <p className='mb-6'>Don't have an account ? <Link to='/sign-up' className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out font-bold'>Register</Link></p>
            <p>
              <Link to='/sign-in' className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out font-bold'>Sign in instead</Link>
            </p>
          </div>
          <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition ease-in-out duration-150 hover:shadow-lg active:bg-blue-800' type='submit'>Send Reset Password</button>
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

export default ForgotPassword
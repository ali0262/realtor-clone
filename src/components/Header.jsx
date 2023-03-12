import React from 'react'
import {useLocation,Link} from 'react-router-dom';

function Header() {


    const location = useLocation()
  


    function pathMatchRoute(route){

            if(route == location.pathname){
                console.log(route,location.pathname);
                return true
            }
    }


  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>

        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <dir>
                <Link to='/'><img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Logo" className='h-5 cursor-pointer' /></Link>
            </dir>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-sm font-semibold text-gray-400  cursor-pointer ${pathMatchRoute('/') && 'border-b-[3px] border-b-red-500 text-black'}`}><Link to='/'>Home</Link></li>
                    <li  className={`py-3 text-sm font-semibold text-gray-400 cursor-pointer ${pathMatchRoute('/offers') && 'border-b-[3px] border-b-red-500 text-black'}`}><Link to='/offers'>Offers</Link></li>
                    <li  className={`py-3 text-sm font-semibold text-gray-400 cursor-pointer ${pathMatchRoute('/sign-in') && 'border-b-[3px] border-b-red-500 text-black'}`}><Link to='/sign-in'>Sign in</Link></li>
                </ul>
            </div>
        </header>

    </div>
  )
}

export default Header
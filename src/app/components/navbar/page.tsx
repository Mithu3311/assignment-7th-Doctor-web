import React from 'react'
import Image from 'next/image'
import Logo from "@/app/components/DRCHAT LOGO.png"
import Link from 'next/link'


const Navbar = () => {
  return (
    <>
    <div className='bg-cyan-800 h-14 w-full flex items-center justify-between'>
        <div className='ml-10'>
            <Image src={Logo} width={120} height={60} alt='blur'></Image>
        </div>
        <ul>
          <Link className='text-gray-100 mr-6 hover:text-gray-300' href="./components/about">About</Link>
          <Link className='text-gray-100 mr-6 hover:text-gray-300' href="./components/services">Services</Link>
          <Link className='text-gray-100 mr-6 hover:text-gray-300' href="./components/contact">Contact</Link>
          <Link className='text-gray-100 mr-6 hover:text-gray-300' href="./components/loginform">Login</Link>
          <Link className='text-gray-100 mr-6 hover:text-gray-300' href="./components/signupform">Sign Up</Link>
        </ul>
        <div>
          <button className='bg-gray-100 h-7 w-24 mr-10 rounded-md'>Book Now</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
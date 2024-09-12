import React, { useContext } from 'react'
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { cartContext } from '../features/Context.jsx';


function Navbar() {
  const {cart}=useContext(cartContext)
  return (
    <div className='w-[100%] h-[80px] bg-slate-600 flex justify-between p-5 items-center'>
    <h1 className='text-2xl text-white'>E commerce</h1>
    <div className='flex gap-5 text-2xl text-white cursor-pointer'>
    <Link  to={'/Cart'}> <IoCart className='mb-[-45px] ml-[-20px]'/>{cart.length}</Link >
   <FaUser />
    </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import SearchBar from './SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FaPerson } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'
import { logout } from '../../Store/Slices/authSlice'

export default function Navbar() {
  const  {token} = useSelector((state)=> state.auth)
  const navigate = useNavigate()
  const  cartLength= useSelector((state)=> state.cart.items)?.length
  const dispatch = useDispatch()
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div className="flex items-center justify-between gap-8">
        <h1 className="m-0 text-2xl font-black tracking-tight text-indigo-600">ShopX</h1>
        <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 sm:gap-6">
          <li><Link className="transition hover:text-indigo-600" to={'/'} >Home</Link></li>
          <li><Link className="transition hover:text-indigo-600" to={'/about'} >About</Link></li>
          <li><Link className="transition hover:text-indigo-600" to={'/products/all/all-category'} >Products</Link></li>
          <li>{token? <Link className="transition hover:text-indigo-600" to={()=>dispatch(logout())}>Logout</Link> : <Link className="transition hover:text-indigo-600" to={'/auth'}>Login / Register</Link>}</li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <SearchBar/>
        <div className="flex items-center gap-4 text-xl text-slate-700">
          {token && <Link className="transition hover:text-indigo-600" to='/profile'><FaPerson/></Link>}
          <div className="relative cursor-pointer transition hover:text-indigo-600">
            <FaShoppingCart onClick={()=>navigate('products')}/>
            {cartLength > 0 && <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-bold text-white">{cartLength}</span>}
          </div>
        </div>
      </div>
    </div>
    </header>
  )
}

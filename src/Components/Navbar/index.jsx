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
    <div>
      <div>
        <h1>ShopX</h1>
        <ul>
          <li><Link to={'/'} >Home</Link></li>
          <li><Link to={'/about'} >About</Link></li>
          <li><Link to={'/products/all/all-category'} >Products</Link></li>
          <li>{token? <Link to={()=>dispatch(logout())}>Logout</Link> : <Link to={'/auth'}>Login / Register</Link>}</li>
        </ul>
      </div>
      <div>
        <SearchBar/>
        <div>
          {token && <Link to='/profile'><FaPerson/></Link>}
          <div>
            <FaShoppingCart onClick={()=>navigate('products')}/>
            {cartLength > 0 && <span>{cartLength}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

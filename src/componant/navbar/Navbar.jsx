import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="p-4 d-flex justify-content-between bg-light shadow">
        <NavLink to=''><h1 className='text-success'>Products App</h1></NavLink>
        <ul className='d-flex align-items-center list-unstyled'>
            <li className='mx-2'>
              <NavLink to='register'>Register</NavLink>
            </li>
            <li className='mx-2'>
              <NavLink to='login'>Login</NavLink>
            </li>
            <li className='mx-2 me-4'>
              <NavLink to='card'><i class="fa-solid fa-cart-shopping position-relative"><span class="badge text-bg-secondary">0</span></i></NavLink>
            </li>
            
        </ul>
    </div>
  )
}

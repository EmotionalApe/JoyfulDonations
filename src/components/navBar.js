import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    // <Link to={'/users'}>Users Page</Link>

    <nav className='flex justify-between'>
        <div><Link to={'/'}>JOYFUL DONATIONS</Link></div>
        <ul className='flex justify-evenly gap-5'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/initiatives'}>Initiatives</Link></li>
            <li><Link to={'/donation'}>Donation</Link></li>
            <li><Link to={'/contact'}>FAQ's and Contacts</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            {/* <li>Initiatives</li>
            <li>Make A Donation</li>
            <li>FAQ's & Contacts</li>
            <li>Admin</li> */}
        </ul>
    </nav>
  )
}

export default NavBar
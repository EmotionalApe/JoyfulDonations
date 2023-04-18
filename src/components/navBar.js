import React from 'react'

function NavBar() {
  return (
    <nav className='flex justify-between'>
        <div>JOYFUL DONATIONS</div>
        <ul className='flex justify-evenly gap-5'>
            <li>Home</li>
            <li>Initiatives</li>
            <li>Make A Donation</li>
            <li>FAQ's & Contacts</li>
            <li>Admin</li>
        </ul>
    </nav>
  )
}

export default NavBar
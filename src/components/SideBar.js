import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

//Early Return
if(!isMenuOpen) return null;

  return (
    <div className='p-5 w-48 shadow-lg'>
        <h1 className='font-bold py-1' >Subscriptions</h1>
        <ul>
            <li>Movies</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Music</li>
        </ul>
        <ul>
          <li><Link to="/"> Home</Link></li> 
          <li>Shorts</li>
        </ul>
    </div>
  )
}

export default SideBar
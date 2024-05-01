import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Header = () => {
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER_URL}/profile`,{Credentials:true})
  },[])
  return (
    <header className='flex  justify-between items-center mb-20'>
        <Link to="/" className='text-2xl font-bold text-blue-500'>My Blog</Link>
        <nav className='w-80 flex justify-around text-gray-500'>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
  )
}

export default Header
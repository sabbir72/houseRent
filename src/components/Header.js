import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'
// import Logo  from "../assets/img/logo.svg";



const Header = () => {
  return <header className='py-6 mb-12 border-b'>
        <div className='container mx-auto flex  justify-between items-center'>
          <Link to="/">
            {/* <img src={Logo} alt="" /> */}
            <h1 className='logo text-orange-600'>HOME RENT</h1>
          </Link>

          <div className='flex items-center gap-6' >
            <Link className=''to="">Log In</Link>
            <Link className='' to="">Sign Up</Link>
          </div>
        </div>
  </header>;
};

export default Header;

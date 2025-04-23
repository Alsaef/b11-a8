import React from 'react';
import LOGO from '../assets/C002-assets/logo.png';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    let nav = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2" : ""
        }>Home</NavLink></li>
        <li><NavLink to='/booking' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2" : ""
        }>Booking</NavLink></li>
        <li><NavLink to='/blogs' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2" : ""
        }>Blogs</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2" : ""}>Contact Us</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100  lg:px-10 px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <a className="flex items-center gap-3"><img className='lg:w-[40px] w-[40px]' src={LOGO} alt="" /> <h2 className='text-xl font-bold'>Law.BD</h2></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-full bg-[#0EA106] text-white">Contact Now</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
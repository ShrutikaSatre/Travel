import React,{useState} from 'react';
import "./navbar.css";
import {MdTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";

const Navbar = () => {
    const [active , setActive]=useState("navBar")
    const showNav =() => {
        setActive('navBar activeNavbar');
    }
    const removeNavbar= () => {
        setActive('navBar');
    }
        return(
            <section className='navBarSection'>
                <header className="header flex">
                        <div className="logoDiv">
                            <a href="/home" className="logo">
                                <img style={{height:"3.7rem"} }src="images/logo1.png" alt="logo" />
                            </a>
                        </div>    
                        
                        <div className={active}>
                            <ul className='navLists flex'>
                                <li className='navItem'>
                                   <a href='home' className='navLink'>Home</a>
                                </li>
                             
                                <li className='navItem'>
                                   <a href='main' className='navLink'>Packages</a>
                                </li>
                             
                                <li className='navItem'>
                                   <a href='hotel' className='navLink'>Hotels</a>
                                </li>
                             
                                <li className='navItem'>
                                   <a href='footer' className='navLink'>About</a>
                                </li>
                             
                                <li className='navItem'>
                                  <a href='contact' className='navLink'>Contact</a>
                                </li>
                                <button className='btn'>
                                    <a href='login'>LOGIN</a>
                                </button>
                            </ul>
                            <div onClick={removeNavbar} className='closeNavbar'>
                                <AiFillCloseCircle className="icon"/>
                            </div>
                        </div>
                    <div onClick={showNav} className='toggleNavbar'>
                        < TbGridDots className="icon"/>
                    </div>
                </header>            
            </section>
    );
}
export default Navbar;

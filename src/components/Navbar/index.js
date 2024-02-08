import React, { useEffect, useState } from 'react'

import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

import './index.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [clicked,setClicked] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [navbarColor,setNavbarColor] = useState("transparent")
    const [mobileNavbarColor,setMobileNavbarColor] = useState("#000")
    const [navbarTextColor,setNavbarTextColor] = useState("ffffff")


    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
          // Change the color based on the scroll position
          const scrollPosition = window.scrollY;
          if (scrollPosition > 50) {
            setNavbarColor("#ffffff");
            setNavbarTextColor("#000000");
            setMobileNavbarColor("#ffffff");
          } else {
            setNavbarColor('transparent');
            setNavbarTextColor("#ffffff");
            setMobileNavbarColor("#000000");

          }
        };

        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);

        };
      }, []);



    const menuListStyles = {
      backgroundColor: windowWidth <= 596 ? mobileNavbarColor : navbarColor
    }
    
    
  return (
    <nav style={{backgroundColor: navbarColor}}>
        <div className='logo'>
            B2Y <span style={{color: navbarTextColor}}>Infy</span>
        </div>
        <div className='menu-icon' onClick={() => setClicked(!clicked)}>
            {
                clicked ? <div className='times' style={{color:navbarTextColor}}><FaTimes /></div> : <div style={{color:navbarTextColor}} className='bars'><FaBarsStaggered /></div>
            }
            
        </div>
        <ul className={clicked ? 'menu-list' : 'menu-list close'} style={menuListStyles}>
            <Link to="/">
                <li style={{color: navbarTextColor}} onClick={() => setClicked(!clicked)}>Home</li>
            </Link>
            <Link to="/about">
                <li style={{color: navbarTextColor}} onClick={() => setClicked(!clicked)}>About</li>
            </Link>
            <Link to="/services">
                <li style={{color: navbarTextColor}} onClick={() => setClicked(!clicked)}>Services</li>
            </Link>
            <Link to="/contact">
                <li style={{color: navbarTextColor}} onClick={() => setClicked(!clicked)}>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar
'use client'
import {useState, useEffect, useRef} from 'react'
import styles from './Header.module.css'
/* import Link from 'next/link' */
// internal components
import NavBarDropdown from '../NavBarDropDown/NavBarDropDown'
import HamburgerDropdown from '../HamburgerDropdown/HamburgerDropdown'
// external libraries
import { Link } from 'react-scroll'


/*
NOTES:
- SINGLE PAGE SCROLL NAVIGATION: use 'react-scroll' package
    - import { Link } from 'react-scroll'
    -  <li><Link to="about" spy={true} smooth={true} duration={500} offset={10} > ABOUT </Link></li>

*/

function HeaderStandard() {
    const dropdownRef = useRef<HTMLDivElement>(null);
    // dropdown navbar menu on smaller screens:
    const [isDropdownActive, setIsDropdownActive] = useState(false);
  
    // toggle dropdown navbar menu on smaller screens:
    const toggleDropdown = () => {
        setIsDropdownActive((prev) => !prev); /* relies on prior state so dont change it to just !isDropdownActive */
    }
  
    // closes dropdown menu on nav item click
    const onNavItemClickCloseDropdown = () =>{
        setIsDropdownActive(false)
    }
  
    // closes dropdown menu when clicking outside the dropdown menu
    useEffect(() => {
        const closeDropdownHandler = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownActive(false)
            }
        }
        document.addEventListener('mousedown', closeDropdownHandler)
  
      return () => {
        document.removeEventListener('mousedown', closeDropdownHandler)
      }
    }, [])
    
  return (
    <header className={styles.header} ref={dropdownRef}>
        {/*  dropdown icon displays >950 px screen size*/}
        <HamburgerDropdown isDropdownActive={isDropdownActive} toggleDropdown={toggleDropdown}/>
        <h1>jB</h1>

        <nav className={styles.navbar}>
            <ul>
                <li><Link to="services" spy={true} smooth={true} duration={500} offset={-10} > Services </Link></li>
                <li><Link to="portfolio" spy={true} smooth={true} duration={500} offset={-10} > Portfolio </Link></li>     
                <li><Link to="about" spy={true} smooth={true} duration={500} offset={-10} > About </Link></li>
                <li><Link to=""> Contact </Link></li>  
            </ul>
        </nav>
        
        {/* dropdown nav displays on >950 px screen size */}
        { isDropdownActive &&
            <NavBarDropdown>
                    <li><Link to="home" spy={true} smooth={true} duration={500} offset={-850} onClick={onNavItemClickCloseDropdown}> Home </Link></li> 
                    <li><Link to="services" spy={true} smooth={true} duration={500} offset={-950}  onClick={onNavItemClickCloseDropdown}> Services </Link></li>  
                    <li><Link to="portfolio" spy={true} smooth={true} duration={500} offset={-950} onClick={onNavItemClickCloseDropdown}> Portfolio </Link></li>     
                    <li><Link to="about" spy={true} smooth={true} duration={500} offset={-950} onClick={onNavItemClickCloseDropdown}> About </Link></li>
                    <li><Link to=''> Contact </Link></li>
            </NavBarDropdown>
        }



    </header>
  )
}

export default HeaderStandard
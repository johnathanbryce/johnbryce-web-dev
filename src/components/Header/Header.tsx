'use client'
import {useState, useEffect, useRef} from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
// internal assets

// internal components
import NavBarDropdown from '../NavBarDropDown/NavBarDropDown'
import HamburgerDropdown from '../HamburgerDropdown/HamburgerDropdown'


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
                <li><Link href="" > Services </Link></li>
                <li><Link href="" > Portfolio </Link></li>     
                <li><Link href="" > About </Link></li>
                <li><Link href="" > Contact </Link></li>  
            </ul>
        </nav>
        
        {/* dropdown nav displays on >950 px screen size */}
        { isDropdownActive &&
            <NavBarDropdown>
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> Home </Link></li> 
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> Services </Link></li>  
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> Portfolio </Link></li>     
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> About </Link></li>
                    <li><Link href="" onClick={onNavItemClickCloseDropdown}> Contact </Link></li>
            </NavBarDropdown>
        }



    </header>
  )
}

export default HeaderStandard
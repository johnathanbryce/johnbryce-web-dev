import styles from './NavBarDropDown.module.css'

interface NavBarDropdownProps {
    children: any;
}
function NavBarDropdown({children}: NavBarDropdownProps) {
  return (
    <nav className={styles.navbar_dropdown}>
        <ul>
            {children}
        </ul>
    </nav>
  )
}

export default NavBarDropdown
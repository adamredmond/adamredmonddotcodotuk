import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements.js';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavLogo to='/' onClick={toggleHome}>Adam Redmond</NavLogo>
            
                <NavMenu>
                    <NavItem>
                        <NavLinks to='home'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                    </NavItem>
                    <NavBtn>
                        <NavBtnLink to='/'>Challenge Me</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;
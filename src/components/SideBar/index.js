import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarWrapper
} from './SidebarElements.js'

import { NavBtn, NavBtnLink } from '../Navbar/NavbarElements.js'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

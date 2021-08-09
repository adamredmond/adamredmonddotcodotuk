import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarWrapper
} from './SidebarElements.js'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} onClick={toggle} >About</SidebarLink>
                    <SidebarLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={+20} onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="contact" smooth={true} duration={500} spy={true} exact='true' offset={+210} onClick={toggle}>Challenge Me</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

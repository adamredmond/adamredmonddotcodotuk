import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav `
background: ${({scrollNav}) => (scrollNav ? 'black' : 'transparent')};
height: 80px;
display: flex;
justified-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8 all ease;
}
`

export const NavbarContainer = styled.div `
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width:100%;
padding: 0 24px;
`

export const MobileIcon = styled.div `
display: none;

@media screen and (max-width: 768px){
    color: white;
    display: block;
    position: absolute;
    top:0;
    right:0;
    margin: 20px;
    transform: translate (-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
} 
`

export const NavMenu = styled.ul `
display:flex;
align-items: center;
list-style: none;
text-align:center;
margin-right: 22px;

@media screen and (max-width: 768px){
    display:none;
}
`

export const NavItem = styled.li `
height:80px;
`
export const NavLinks = styled(LinkS)
`
color: #fff;
display:flex;
align-items: center;
text-decoration: none;
padding-left: 2em;
height:100%;
cursor: pointer;

&.active{
    border-bottom: 3px solid #01BF71
}
`

export const NavLogo = styled(LinkR)
`
color: white;
justtify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display:flex;
align-items:center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`

export const NavBtn = styled.nav `
display: flex;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(LinkR)
`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding-right 20%;
padding-left 20%;
padding-top: 10%;
padding-bottom: 10%;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2 ease-in-out;
text-decoration: none;
margin-left: 15px;

&:hover {
    transition: all 0.2 ease-in-out;
    background: white;
    color: #010606;
}
`
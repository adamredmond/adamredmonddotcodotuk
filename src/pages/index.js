import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/SideBar'
import InfoSection from '../components/InfoSection'
import { infoSalesforce } from '../components/InfoSection/Data';
import { infoWebDev } from '../components/InfoSection/Data';
import ContactSection from '../components/ContactSection';

const Home = () => {
const [isOpen, setIsOpen] = useState(false);


const toggle = () => {
    setIsOpen(!isOpen);
}

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...infoSalesforce}/>
        <InfoSection {...infoWebDev}/>
        <Services />
        <ContactSection />
        </>
    )
}

export default Home

import React from 'react';
import {
    ContactContainer,
    ContactH1,
    ContactH2,
    ContactWrapper
} from './ContactElements'

import ContactForm from '../ContactForm'

const Services = () => {

  
    return (
        <ContactContainer id='contact'>
            <ContactH1>Contact</ContactH1>
            <ContactWrapper>
                <ContactH2>Hey, lets talk about your project</ContactH2>
                <ContactForm />
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Services

import React from 'react';
import {
    ContactContainer,
    ContactH1,
    ContactWrapper
} from './ContactElements'

import ContactForm from '../ContactForm'

const Services = () => {

  
    return (
        <ContactContainer id='contact'>
            <ContactH1>Lets talk about your project</ContactH1>
            <ContactWrapper>
                <ContactForm />
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Services

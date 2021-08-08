import React from 'react';
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesWrapper,
    ServicesP,
    ServicesCard
} from './ServicesElements'

import silverClosetShop from '../../images/silverclosetshop.jpeg'
import Icon2 from '../../images/services2.svg'
import Icon3 from '../../images/services3.svg'

const Services = () => {

  
    return (
        <ServicesContainer id='projects'>
            <ServicesH1>Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to={"https://www.google.com"}>
                    <ServicesIcon src={silverClosetShop}/>
                    <ServicesH2>Silver Closet Shop</ServicesH2>
                    <ServicesP>Online clothing retailer</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Website Development</ServicesH2>
                    <ServicesP>Web Constultancy</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Business Analytics</ServicesH2>
                    <ServicesP>Lorium memelel</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services

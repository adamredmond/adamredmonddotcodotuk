import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesWrapper,
    ServicesP,
    ServicesCard
} from './ServicesElements'

import Icon1 from '../../images/services1.svg'
import Icon2 from '../../images/services2.svg'
import Icon3 from '../../images/services3.svg'

const Services = () => {
    return (
        <ServicesContainer id='projects'>
            <ServicesH1>Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Salesforce</ServicesH2>
                    <ServicesP>Salesforce Constultancy</ServicesP>
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

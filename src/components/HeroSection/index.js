import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import Button from '../ButtonElements'
import {
        HeroContainer,
        HeroBg,
        VideoBg,
        HeroContent,
        HeroH1,
        HeroP,
        HeroBtnWrapper,
        ArrowForward,
        ArrowRight
        } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
            </HeroBg>
                <HeroContent>
                    <HeroH1>Hello, I'm Adam.</HeroH1>
                    <HeroP>Software Consultant.</HeroP>
                
                <HeroBtnWrapper>
                    <Button to='/'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                        View my work {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                </HeroContent>
                
        </HeroContainer>
        
    )
}

export default HeroSection;

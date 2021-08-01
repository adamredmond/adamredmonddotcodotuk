import React, {useState} from 'react'
import { Button } from '../ButtonElements'
import { 
        ImgWrap,
        InfoContainer,
        InfoRow,
        InfoWrapper,
        Column1,
        Column2,
        TextWrapper,
        TopLine,
        HeadingH1,
        HeadingH2,
        SubTitle,
        BtnWrap,
        Img
    } from './InfoElements'

    import {
        ArrowForward,
        ArrowRight
        } from '../HeroSection/HeroElements';

const InfoSection = ({primary, dark, dark2, lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt}) => {
    
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <HeadingH1 lightText={lightText}>About</HeadingH1>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <HeadingH2 lightText={lightText}>{headLine}</HeadingH2>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWrap>
                            <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>
                            Salesforce {hover ? <ArrowForward /> : <ArrowRight />}
                            </Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection

import React, { useState } from 'react'
import { Section } from '../Components/StyledComponents/Section.styled'
import { NavBar, NavLogo, NavLink, NavToggle } from '../Components/StyledComponents/NavBar.styled'
import { Container } from '../Components/StyledComponents/Container.styled'
import { HeroSection, HeroDetails, HeroImage, HeroMainText, HeroParagraph } from '../Components/StyledComponents/HeroSection.styled'
import { Button } from '../Components/StyledComponents/Button.styled'
import { NavMenu } from '../Components/ReactComponents/NavMenu'

import HeroImg from '../Images/Hero-Img.png'

import HomePage from '../Images/HomePage.png';
import HomePageMobile from '../Images/Homepage-mobile.png'

export const Home = () => {

    const navLinks = [
        {
            src: "#home",
            label: "Home"
        },
        {
            src: "#services",
            label: "Services"
        },
        {
            src: "#contact",
            label: "Contact"
        },
    ]

    const [isToggled, setIsToggled] = useState(false)

    return (

        <Section id='home' backgroundImageDesktop={HomePage} backgroundImageMobile={HomePageMobile}>
            {isToggled && <NavToggle navLinks={navLinks}/>}
            <Container>
                <NavBar>
                    <NavLogo firstLetter="J" text="azen" />
                    <NavLink navLinks={navLinks} />
                    <NavMenu setIsToggled={setIsToggled}/>
                </NavBar>
                <HeroSection>
                    <HeroDetails>
                        <HeroMainText>
                            <span>Build, </span> build.
                        </HeroMainText>
                        <HeroParagraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dignissimos, 
                            aspernatur sequi architecto exercitationem molestiae. Iure quos reprehenderit voluptate, 
                            beatae mollitia quis labore quod, ab illum, nobis magni placeat voluptatum eligendi pariatur 
                            et sit illo odio rem? Natus suscipit qui animi adipisci. Quis voluptas, 
                            ducimus quo obcaecati autem eligendi hic?
                        </HeroParagraph>
                        <div>
                            <Button 
                                backgroundColor="var(--light-green)"
                                color="var(--primary-green)"
                                border="none"
                            >
                                Portfolio
                            </Button>
                            <Button
                                border="1px solid var(--light-green)"
                                backgroundColor="transparent"
                                color="var(--light-green)"
                            >
                                Resume
                            </Button>
                        </div>
                    </HeroDetails>
                    <HeroImage src={HeroImg}></HeroImage>
                </HeroSection>
            </Container>
        </Section>
    )
}

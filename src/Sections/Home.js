import React from 'react'
import { HomeSection } from '../Components/StyledComponents/Section.styled'
import { NavBar, NavLogo, NavLink } from '../Components/StyledComponents/NavBar.styled'
import { Container } from '../Components/StyledComponents/Container.styled'
import { HeroSection, HeroDetails, HeroImage } from '../Components/StyledComponents/HeroSection.styled'
import { Button } from '../Components/StyledComponents/Button.styled'

import HeroImg from '../Images/Hero-Img.png'

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

    return (

        <HomeSection id='home'>
            <Container>
                <NavBar>
                    <NavLogo firstLetter="J" text="azen" />
                    <NavLink navLinks={navLinks} />
                </NavBar>
                <HeroSection>
                    <HeroDetails>
                        <h1>
                            <span>Build, </span> 
                            build.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dignissimos, 
                            aspernatur sequi architecto exercitationem molestiae. Iure quos reprehenderit voluptate, 
                            beatae mollitia quis labore quod, ab illum, nobis magni placeat voluptatum eligendi pariatur 
                            et sit illo odio rem? Natus suscipit qui animi adipisci. Quis voluptas, 
                            ducimus quo obcaecati autem eligendi hic?
                        </p>
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
        </HomeSection>
    )
}

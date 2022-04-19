import React from 'react'
import { Section } from '../Components/StyledComponents/Section.styled'
import { Card, CardContainer, CardIconContainer, CardText, CardTitle } from '../Components/StyledComponents/Card.styled'
import { Container } from '../Components/StyledComponents/Container.styled'
import { CardHeader } from '../Components/StyledComponents/Card.styled'

import ServicesPage from '../Images/ServicesPage.png'
import ServicesPageMobile from '../Images/ServicesPage-mobile.png'

import { BiWebcam } from 'react-icons/bi'
import { MdDesignServices } from 'react-icons/md'
import { IoIosCreate } from 'react-icons/io'

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiAdobexd } from 'react-icons/si'
import { Label } from '../Components/StyledComponents/Label.styled'

import { BiNetworkChart } from 'react-icons/bi'


export const Services = () => {

    const cardContent = [
        {
            title: "WEB DEVELOPMENT",
            logo: <IoIosCreate/>,
            description: "Lorem ipsum dolor sit fugit architecto  dolore deserunt perspiciatis consectetur neque blanditiis, laudantium inventore vel! Non, inventore sequi?",
            icons: [<AiFillHtml5/>, <DiCss3/>, <DiReact/>]
        },
        {
            title: "WEB DESIGN",
            logo: <MdDesignServices/>,
            description: "Lorem ipsum commodi sit possimus minima dolore  neque blanditiis, laudantium inventore vel! Non, inventore sequi?",
            icons: [<FiFigma/>, <SiAdobephotoshop/>, <SiAdobexd/>]
        },
        {
            title: "WEB CLONING",
            logo: <BiWebcam/>,
            description: "Lorem ipsum dolor sit fugit architec  minima dolore deserunt perspiciatis consectetur neque blanditiis, laudantium inventore vel! Non, inventore sequi?",
            icons: [<AiFillHtml5/>, <DiCss3/>, <DiReact/>]
        }
    ]

    return (
        <Section id='services' backgroundImageDesktop={ServicesPage} backgroundImageMobile={ServicesPageMobile}>
            <Container
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                <Label label="SERVICES" icon={<BiNetworkChart/>}/>
                <CardContainer>
                    {cardContent.map((content) => {
                        return(
                            <Card>
                            <CardHeader title={content.title} logo={content.logo}/>
                            <CardText>{content.description}</CardText>
                            <CardIconContainer>
                                {[...content.icons]}
                            </CardIconContainer>
                        </Card>
                        )
                    })}
                </CardContainer>
            </Container>
        </Section>
    )
}

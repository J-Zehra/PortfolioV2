import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

export const Socials = ({className}) => {

    const SocialsLogo = [
        <AiOutlineMail/>,
        <AiFillGithub/>,
        <BsFacebook/>
    ]
    
    return (
        <div className={className}>
            {SocialsLogo.map((logo) => {
                return( 
                    <a href="#">
                        {logo}
                    </a>
                )
            })}
        </div>
    )
}

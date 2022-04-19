import styled from 'styled-components'
import { CardHead } from '../ReactComponents/CardHead'

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        
    }
`

export const Card = styled.div`
    height: 27rem;
    width: 27rem;
    background-color: red;
    border-radius: 1.5rem;
    background-color: var(--primary-green);
    box-shadow: 5px 5px 16px black;
    padding-block: 2rem;
    padding-inline: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover{
        background-color: #073139;
        transform: scale(1.05);

        div{
            h1{
                color: var(--tertiary-green);
            }

            svg{
                color: var(--tertiary-green);
            }
        }

        p{
            color: var(--tertiary-green);
        }
    }

    @media (max-width: 768px) {
        max-width: 100%;
        height: 22rem;
        
        div{

            h1{
                align-items: center;
                font-size: 1.3rem;
            }

            svg{
                
            }
        }

        p{
            font-size: .8rem;
        }

    }
` 

export const CardHeader = styled(CardHead)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    h1{
        color: var(--secondary-green);
        font-size: 1.6rem;
    }

    svg{
        font-size: 4rem;
        color: var(--secondary-green);
    }
`
export const CardText = styled.p`
    color: var(--secondary-green);
    font-size: 1.1rem;
    text-align: center;
`

export const CardIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    svg{
        color: var(--secondary-green);
        font-size: 1.2rem;
    }
`
import styled from 'styled-components'
import { Socials } from '../ReactComponents/Socials'

export const SocialsSection = styled(Socials)`
    height: 12rem;
    background-color: var(--primary-green);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20rem;

    a{
        color: var(--secondary-green);
        font-size: 3rem;
    }

    @media (max-width: 768px) {
        height: 5rem;
        gap: 4rem;

        a{
            font-size: 1.2rem;
        }
    }
` 
import styled from 'styled-components'
import { Logo } from '../ReactComponents/Logo'
import { NavLinks } from '../ReactComponents/NavLinks'

export const NavBar = styled.nav`
    height: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding-block: 1rem;
    position: absolute;
    justify-content: space-between;

    svg{
        display: none;
        z-index: 1;
    }

    @media (max-width: 768px) {
        height: 7rem;

        svg{
            display: block;
        }
    }
`
export const NavToggle = styled(NavLinks)`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    width: 100%;
    height: 15rem;
    background-color: var(--light-green);
    z-index: 1;
    gap: 1rem;

    a{
        color: var(--primary-green);
        font-size: 1.1rem;
        font-weight: 600;
    }

    .active{
        position: relative;
        font-size: 1.15rem;
        border-bottom: 1px solid var(--primary-green);
    }
`

export const NavLogo = styled(Logo)`
    color: var(--light-green);
    font-size: 1.5rem;
    letter-spacing: .15rem;

    span{
        font-size: 3rem;
        font-family: 'Beau Rivage';
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        visibility: hidden;

        span{
            visibility: visible;
            font-size: 3.5rem;
        }
    }
`

export const NavLink = styled(NavLinks)`
    display: flex;
    gap: 4rem;

    a{
        font-size: 1.1rem;
        font-weight: 600;
        padding-block: .2rem;
        color: var(--primary-green);
    }

    .active{
        position: relative;
        font-size: 1.15rem;

        &::before{
            content: '';
            width: 2rem;
            height: .1rem;
            background: var(--primary-green);
            top: 0;
            left: 0;
            position: absolute;
            border-radius: 20rem;
        }

        &::after{
            content: '';
            width: 2rem;
            height: .1rem;
            background: var(--primary-green);
            bottom: 0;
            right: 0;
            position: absolute;
            border-radius: 20rem;
        }
    }

    @media (max-width: 768px) {
        gap: 0;
        display: none;
    }
`
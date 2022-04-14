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
`
export const NavLogo = styled(Logo)`
    color: var(--light-green);
    font-size: 1.5rem;
    letter-spacing: .15rem;

    span{
        font-size: 3rem;
        font-family: 'Beau Rivage';
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
`
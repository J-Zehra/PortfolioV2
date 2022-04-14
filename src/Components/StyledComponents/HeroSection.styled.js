import styled from 'styled-components'


export const HeroSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
`
export const HeroDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 2rem;

    h1{
        color: var(--light-green);
        font-size: 5rem;
        width: fit-content;
        height: fit-content;

        span{
            -webkit-text-stroke: 1px var(--light-green);
            color: transparent;
        }
    }

    p{
        color: var(--light-green);
        font-size: 1.1rem;
        max-width: 35rem;
    }

    div{
        display: flex;
        gap: 2rem;
        max-width: 35rem;
    }
`
export const HeroImage = styled.img`
    flex: 1;
    position: relative;
    right: -7.5rem;
    transform: scale(.9);
`
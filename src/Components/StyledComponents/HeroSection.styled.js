import styled from 'styled-components'

export const HeroSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    @media (max-width: 768px) {
    flex-direction: column;
}
`
export const HeroDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 2rem;

    div{
        display: flex;
        gap: 2rem;
        max-width: 35rem;
    }

    @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        margin-top: 8rem;

        div{
            width: 100%;
            flex-direction: column;
        }
    }
`
export const HeroMainText = styled.h1`
    color: var(--light-green);
    font-size: 5rem;
    max-width: 100%;
    height: fit-content;

    span{
        -webkit-text-stroke: 1px var(--light-green);
        color: transparent;
    }

    @media (max-width: 768px) {
        font-size: 3rem;
        text-align: center;
    }
`
export const HeroParagraph = styled.p`
    color: var(--light-green);
    font-size: 1.1rem;
    max-width: 35rem;

    @media (max-width: 768px) {
        text-align: justify;
        font-size: .9rem;
    }
`
export const HeroImage = styled.img`
    flex: 1;
    position: relative;
    right: -7.5rem;
    transform: scale(.9);

    @media (max-width: 768px) {
        display: none;
    }
`
import styled from 'styled-components'

export const Section = styled.section`
    height: 100vh;
    background-image: url(${(props => props.backgroundImageDesktop)});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
    background-image: url(${(props => props.backgroundImageMobile)});
    background-size: cover;
}
`


import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    height: 100vh;
    margin: auto;
    position: relative;
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};

    @media (max-width: 768px) {
        width: 85%;
        height: 180%;
    }
`
import styled from 'styled-components'

export const Button = styled.button`
    width: 100%;
    height: 4rem;
    font-weight: 500;
    border-radius: .5rem;
    background-color: ${(props) => props.backgroundColor};
    border:  ${(props) => props.border};
    color:  ${(props) => props.color};
    font-size: 1rem;
`
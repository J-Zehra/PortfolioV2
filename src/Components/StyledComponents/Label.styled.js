import styled from 'styled-components'
import { SectionLabel } from '../ReactComponents/SectionLabel'

export const Label = styled(SectionLabel)`
    position: absolute;
    right: 0;
    top: 0;
    padding-block-start: 5rem;
    display: flex;
    gap: .8rem;
    align-items: center;

    h1{
        color: var(--secondary-green);
    }

    svg{
        font-size: 1.6rem;
        color: var(--secondary-green);
    }
` 
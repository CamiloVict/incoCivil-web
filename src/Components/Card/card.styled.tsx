import styled from 'styled-components'
import { sizes } from '../../../utils/screenSizes'

export const CardLayout = styled.div<{image: string}>`
    height: 300px;
    width: 200px;
    position: relative;
    ${
        props => `background-image: url(${props.image});`
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    z-index: 1;
    cursor: pointer;
    transition: all ease-in-out 300ms;
    
    &:hover {
        transform: scale(1.05);
    }

    &:after {
        content: '';
        width: inherit;
        height: inherit;
        position: absolute;
        top: 0%;
        z-index: 0;
        left: 0%;
        background: linear-gradient(to bottom, transparent 0%, black 100%)
    }

    @media screen and (max-width: ${sizes.mobileL}) {
        transform: none !important;
    }

`

export const CardHeader = styled.div`
    h2 {
        margin: 0 !important;
    }

    margin: 20px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
`
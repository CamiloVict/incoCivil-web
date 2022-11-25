import styled from 'styled-components'
import { sizes } from '../../../utils/screenSizes'

export const CardLayout = styled.div<{image: string}>`
    height: 400px;
    max-width: 300px;
    width: 100%;
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
        transform: scale(0.95);
    }

    .card-overlay {
        height: 400px;
        max-width: 300px;
        width: 100%;
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
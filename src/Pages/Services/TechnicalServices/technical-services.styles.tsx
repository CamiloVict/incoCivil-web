import styled from "styled-components";
import { sizes } from "../../../../utils/screenSizes";

export const TechnicalServicesContainer = styled.section`
    h2 {
        text-align: center;
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 800px;
    margin: auto;
    gap: 20px;

    .card--container {
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    @media screen and (max-width: ${sizes.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 537px) {
        grid-template-columns: repeat(1, 1fr);
    }

`;

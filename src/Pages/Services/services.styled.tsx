import styled from "styled-components";
import { sizes } from "../../../utils/screenSizes";


export const ServicesContainer = styled.div`
    max-width: ${sizes.laptop};
    display: flex;
    gap: 25px;
    justify-content: center;
    margin: 10px auto;
    padding: 10px;

    @media screen and (max-width: ${sizes.mobileL}) {
        flex-direction: column;
        align-items: center;
    }
`
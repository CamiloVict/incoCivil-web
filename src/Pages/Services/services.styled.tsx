import styled from "styled-components";
import { sizes } from "../../../utils/screenSizes";


export const ServicesContainer = styled.div`
    max-width: ${sizes.laptop};
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 10px auto;

    @media screen and (max-width: ${sizes.mobileL}) {
        flex-direction: column;
        align-items: center;
    }
`
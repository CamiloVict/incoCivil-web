import styled from "styled-components";
import { sizes } from "../../../../utils/screenSizes";

export const OurProsContainer = styled.section`
    width: 400px;
    margin: 50px auto;
    h2 {
        text-align: center;
    }

    @media screen and (max-width: ${sizes.mobileL}) {
        width: 90%;
    }
`;

export const AccordionContainer = styled.div`
`;
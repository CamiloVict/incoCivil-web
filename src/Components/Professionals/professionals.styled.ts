import styled from "styled-components";
import { sizes } from "../../../utils/screenSizes";

export const ProfessionalsContainer = styled.div`
    min-height: 200px;
    box-shadow: 0px 4px 10px 0px rgb(0 0 0 / 50%);
    border-radius: 5px;
    padding: 10px 20px;
    margin: 5px;
`;

export const SimpleSliderContainer = styled.div`
    /* height: 200px; */
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    overflow: auto hidden;

`;

export const SliderElement = styled.div`
    width: 250px;
    height: 250px;
    cursor: pointer;
    
    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        transition: all ease-in-out 300ms;
    }
`;

export const ModalElement = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 4px 10px 0px rgb(0 0 0 / 50%);
    border-radius: 10px;

    h3 {
        margin-top: 0;
        margin-bottom: 20px;
    }

    .image--wrapper {
        height: 300px;
        width: 100%;
        margin: auto;
        overflow: auto;

        img {
            margin-bottom: 20px;
            width: 100%;
        }
    }

    .exit-wrapper {
        display: flex;
        flex-direction: row-reverse;
        font-size: 20px;
        cursor: pointer;
    }

`
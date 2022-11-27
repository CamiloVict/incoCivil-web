import React from "react";
import { AccordionTypes } from "utils/types/Accordion";
import AccordionItem from "../AccordionItem";
import { AccordionContainer } from "./accordion.styled";

const Accordion = ({ elements }: AccordionTypes) => {
    return (
        <AccordionContainer>
            {elements.map((element, index) => {
                return (<AccordionItem header={element.header} body={element.body} key={index} />)
            })}
        </AccordionContainer>
    )
}

export default Accordion;
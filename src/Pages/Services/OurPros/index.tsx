import React, { useEffect, useState } from "react";
import { AccordionContainer, OurProsContainer } from "./our-pros.styled";
import { professionals } from "../../../../utils/constants";
import Accordion from "../../../../src/Components/Accordion";

const OurPros = () => {
    const [accordionElements, setAccordionElements ] = useState([])
    useEffect(() => {
        const elements = Object.values(professionals).map((element, index) => {
            const { name, professional } = element;

            const elements = {
                header: name,
                body: <ul> {professional.map((pro, proIndex) => <li key={proIndex + index}>{pro}</li>)}</ul>
            }

            return elements
        })
        setAccordionElements(elements);
    }, []);


    return (
        <OurProsContainer>
            <h2>Nuestros profesionales</h2>
            <AccordionContainer>
                <Accordion elements={accordionElements}></Accordion>
            </AccordionContainer>
        </OurProsContainer>
    )
}

export default OurPros;
import React, { useState } from "react";
import { AccordionItemTypes } from "utils/types/Accordion";
import { AccordionItemContainer, AccordionItemHeader, AccordionItemBody } from "./accordion-item.styled";

const AccordionItem = ({ header, body }: AccordionItemTypes) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleClick = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <AccordionItemContainer>
            <AccordionItemHeader onClick={handleClick} collapsed={isCollapsed} >
                <h3>{header}</h3>
                <img src="/public/svg/arrow.svg" />
            </AccordionItemHeader>
            <AccordionItemBody collapsed={isCollapsed}>
                {body}
            </AccordionItemBody>
        </AccordionItemContainer>
    )
}

export default AccordionItem;
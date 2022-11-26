export type AccordionTypes = {
    elements: AccordionItemTypes[];
}

export type AccordionItemTypes = {
    header: string;
    body: string | React.ReactNode
}
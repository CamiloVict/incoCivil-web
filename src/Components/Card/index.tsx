import React from "react";

/*Types */
import { CardTypes } from "utils/types/Card";

/* Styles */
import { CardHeader, CardLayout } from "./card.styled";

const Card = ({ header, image }: CardTypes) => {
    return (
        <CardLayout image={image}>
            <CardHeader>
                <h2>{header}</h2>
            </CardHeader>
        </CardLayout>
    )
}

export default Card;
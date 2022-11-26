import React from "react";

/*Types */
import { CardTypes } from "utils/types/Card";

/* Styles */
import { CardHeader, CardLayout } from "./card.styled";

const Card = ({ header, image, redirectLink = '#' }: CardTypes) => {
    return (
        <CardLayout image={image}>
            <a href={window.location.href + redirectLink}>
                <CardHeader>
                    <h3>{header}</h3>
                </CardHeader>
                <div className="card-overlay"></div>
            </a>
        </CardLayout>
    )
}

export default Card;
import React from "react";
import { Link } from 'react-router-dom';

/*Types */
import { CardTypes } from 'utils/types/Card';

/* Styles */
import { CardHeader, CardLayout } from './card.styled';

const Card = ({ header, image, redirectLink = '#' }: CardTypes) => {
    const redirect: string = `${redirectLink}/`
    return (
        <CardLayout image={image}>
            <Link to={redirect}>
                <CardHeader>
                    <h3>{header}</h3>
                </CardHeader>
                <div className="card-overlay"></div>
            </Link>
        </CardLayout>
    )
}

export default Card;

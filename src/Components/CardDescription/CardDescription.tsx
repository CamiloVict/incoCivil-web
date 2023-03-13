import React from 'react';
import { Link } from 'react-router-dom';

import { CardContainer, CardDescription as Card, Description } from './CardDescription.style';

export const CardDescription = ({ items }: any) => {
  const renderCards = () =>
    items.map((item: any, indexItem: number): JSX.Element => {
      const { icon, description, callToAction } = item;

      return (
        <Card key={indexItem}>
          {icon}
          <Description>{description}</Description>
          {callToAction &&
            <Link to={callToAction.route}>
              <span>
                {callToAction.title}
              </span>
            </Link>
          }
        </Card>
      );
    });

  return <CardContainer>{renderCards()}</CardContainer>;
};

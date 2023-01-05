import React from 'react'

import { CardContainer, CardDescription as Card, Description } from './CardDescription.style'

export const CardDescription = ({ items }: any) => {
  const renderCards = () => (
    items.map((item: any, indexItem: number): JSX.Element => {
      const { icon, description } = item
      return (
        <Card key={indexItem}>
          {icon}
          <Description>
            {description}
          </Description>
        </Card>
      )
    })
  )

  return (
    <CardContainer>
      {renderCards()}
    </CardContainer>
  )
}
import React from 'react'
import { Icon } from 'src/Components/Footer/footer.style'

import { CardContainer, CardDescription as Card, Description } from './CardDescription.style'

export const CardDescription = ({items}: any) => {
  console.log('12 props >>> ', items.icon);

  const renderCards = () => {
    return items.map((item: any, indexItem: number) => {
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
  }

  return (
    <CardContainer>
      {renderCards()}
    </CardContainer>
  )
}
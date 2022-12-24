import React from 'react'

import { BannerContainer, ContainerText, Image, Text } from './banner.style'

export const Banner = () => {
  return (
    <BannerContainer>
      {/* // ! this image should be in PNG format  */}
      <Image src="images/theBigBoss.jpeg" alt="The boss" />
      <ContainerText>

      <Text>En INCOCIVIL insumos para la construcción civil S.A.S sabemos que el componente mas importante
        para la construcción Colombiana es el personal capacitado. Es por esta razón que hemos logrado
        formar el mejor equipo de trabajo para cada área en la que nos especializamos, encontrando plena
        satisfacción de nuestros clientes al momento de la entrega.
      </Text>
      </ContainerText>
    </BannerContainer>
  )
}

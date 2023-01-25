import React from 'react';

import { BannerContainer, ContainerText, Image, Text } from './banner.style';

export const Banner = () => {
  return (
    <BannerContainer>
      <Image src='images/boss.png' alt='The boss' />
      <ContainerText>
        <Text>
          En INCOCIVIL insumos para la construcción civil S.A.S sabemos que el componente mas importante para la
          construcción Colombiana es el personal capacitado. Es por esta razón que hemos logrado formar el mejor equipo
          de trabajo para cada área en la que nos especializamos, encontrando plena satisfacción de nuestros clientes al
          momento de la entrega.
        </Text>
      </ContainerText>
    </BannerContainer>
  );
};

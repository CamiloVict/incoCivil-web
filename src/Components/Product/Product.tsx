import React from 'react';

// *Components
import { Description, ProductContainer } from './product.style';

const Product = (props: any) => {
  console.log('7 item >>> ', props);
  const { src, description } = props
  return (
    <ProductContainer>
      <>
        <img src={src} />
      </>
      <Description>
        {description}
      </Description>
    </ProductContainer>
  );
};

export default Product;

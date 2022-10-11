import React from 'react';

// *Components
import { ProductContainer } from './product.style';

const Product = ({ item }: any) => {
  return (
    <ProductContainer>
      <p>{item.img}</p>
      <p>{item.description}</p>
    </ProductContainer>
  );
};

export default Product;

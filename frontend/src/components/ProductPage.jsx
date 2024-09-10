import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default ProductPage;

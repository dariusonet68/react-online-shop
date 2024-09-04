import React from 'react';
import { ProductsContainer } from '../containers/ProductsContainer';
import TopbarContainer from '../containers/TopbarContainer';

export default function HomePage() {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <ProductsContainer />
      </div>
    </div>
  );
}

import React from 'react';
import ProductsContainer from '../containers/ProductsContainer';
import TopbarContainer from '../containers/TopbarContainer';
import SidebarContainer from '../containers/SidebarContainer';
import SearchbarComponent from '../components/SearchbarComponent';

export default function HomePage() {
  return (
    <div className="container-fluid bg-dark">
      <TopbarContainer />
      <div className="d-flex">
        <SidebarContainer />
      </div>
      <div className="d-flex">
        <ProductsContainer />
      </div>
    </div>
  );
}

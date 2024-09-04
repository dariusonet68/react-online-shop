import React, { useState, useEffect } from 'react';
import { ProductComponent } from '../components/ProductComponent';
import SearchbarComponent from '../components/SearchbarComponent';

export const ProductsContainer = () => {
  // Store fetched products data
  const [products, setProducts] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch products data from API
  const fetchData = () => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((responseJSON) => setProducts(responseJSON));
  };

  // Handle input change for search (if needed)
  // const handleInputChange = (event) => setSearchValue(event.target.value);

  return (
    <div className="container">
      {/* Search bar */}
      {/* <SearchbarComponent
        searchValue={searchValue}
        handleInputChange={handleInputChange}
      /> */}

      {/* Products - results */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-3">
        {products.length > 0
          ? products.map((product) => (
              <ProductComponent
                key={product.id}
                title={product.title}
                images={product.images[0]}
              />
            ))
          : 'NO DATA AVAILABLE'}
      </div>
    </div>
  );
};

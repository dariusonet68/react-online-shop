import React, { useState } from 'react';
import { mockProducts } from '../assets/mockProducts';
import SearchbarComponent from '../components/SearchbarComponent';

export default function ProductsContainer() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(
    mockProducts.products
  );

  // Functie pentru schimbarea in input
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase(); // Preia valoarea inputului
    setSearchValue(value); // Actualizeaza stateul

    // Filtrarea produselor pe baza textului introdus
    const filtered = mockProducts.products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered); // Actualizeaza lista produselor filtrate
  };

  return (
    <div className="container">
      {/* Searchbar */}
      <SearchbarComponent
        searchValue={searchValue}
        handleInputChange={handleInputChange}
      />

      {/* Product List */}
      <div className="row mt-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

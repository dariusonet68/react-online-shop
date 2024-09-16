import React, { useState } from 'react';
import { mockProducts } from '../assets/mockProducts';
import SearchbarComponent from '../components/SearchbarComponent';
import { Link } from 'react-router-dom';
import { ProductComponent } from '../components/ProductComponent';
import SidebarContainer from './SidebarContainer';

export default function ProductsContainer() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
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

  //Functie pentru selectarea categoriei
  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);

    //Filtreaza produsele dupa categorie
    const filtered = mockProducts.products.filter(
      (product) => product.category.name === categoryName
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <SidebarContainer onSelectCategory={handleSelectCategory} />

      <div className="d-flex container ml-5 flex-wrap">
        {/* Searchbar */}
        <SearchbarComponent
          searchValue={searchValue}
          handleInputChange={handleInputChange}
        />

        {/* Product List */}
        <div className="col col-12 mt-5 px-5 mx-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to={'/details/' + product.id}>
                <ProductComponent
                  key={product.id}
                  images={product.images[0]}
                  title={product.title}
                  price={product.price}
                />
              </Link>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

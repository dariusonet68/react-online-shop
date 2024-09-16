import React, { useState, useEffect } from 'react';
import { mockProducts } from '../assets/mockProducts'; // asigură-te că acest path este corect

export const CategoriesContainer = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Ia categoria din products
    const uniqueCategories = mockProducts.products
      .map((product) => product.category)
      .filter(
        (value, index, self) =>
          index === self.findIndex((cat) => cat.id === value.id)
      );

    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 d-flex flex-column mt-3">
          {categories.length > 0
            ? categories.map((category, index) => (
                <button
                  key={index}
                  className="btn btn-primary mb-2"
                  onClick={() => onSelectCategory(category.name)}
                >
                  {category.name}
                </button>
              ))
            : 'NO DATA AVAILABLE'}
        </div>
        <div className="col-10"></div>
      </div>
    </div>
  );
};

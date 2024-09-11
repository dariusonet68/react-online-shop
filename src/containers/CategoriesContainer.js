import React, { useState, useEffect } from 'react';
import { CategoryComponent } from '../components/CategoryComponent';
import { mockProducts } from '../assets/mockProducts'; // asigură-te că acest path este corect

export const CategoriesContainer = () => {
  // Store fetched categories data
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
    <div className="container">
      {/* Category - results */}
      <div className="col-4 row-cols-md-2 row-cols-lg-3 mt-3">
        {categories.length > 0
          ? categories.map((category, index) => (
              <CategoryComponent key={index} name={category.name} />
            ))
          : 'NO DATA AVAILABLE'}
      </div>
    </div>
  );
};

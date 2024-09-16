import React from 'react';
import { CategoriesContainer } from './CategoriesContainer';

export default function SidebarContainer({ onSelectCategory }) {
  return (
    <div className="d-flex flex-column flex-shrink-0 bg-dark text-white p-3 position-fixed vh-100">
      <h4>Categories</h4>
      <ul className="nav flex-column mb-auto p-3">
        <li className="nav-item m-1">
          <CategoriesContainer onSelectCategory={onSelectCategory} />
        </li>
      </ul>
    </div>
  );
}

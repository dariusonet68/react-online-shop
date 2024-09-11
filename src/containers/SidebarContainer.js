import React from 'react';
import { CategoriesContainer } from './CategoriesContainer';

export default function SidebarContainer() {
  return (
    <div className="d-flex flex-column bg-dark text-white position-absolute overflow-auto p-3">
      <ul className="p-3">
        <li className="">
          <CategoriesContainer />
        </li>
      </ul>
    </div>
  );
}

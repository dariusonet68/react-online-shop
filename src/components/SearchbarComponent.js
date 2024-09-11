import React from 'react';

export default function SearchbarComponent({ searchValue, handleInputChange }) {
  return (
    <div className="d-flex container-fluid gap-3 align-items-center p-2">
      <div className="d-flex ms-auto w-50 align-items-center">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          value={searchValue} // Leaga valoarea inputului de searchValue din state-ul ProductsContainer
          aria-label="Search"
          onChange={handleInputChange} // Apeleaza handleInputChange cand utilizatorul tasteaza
        />
      </div>
    </div>
  );
}

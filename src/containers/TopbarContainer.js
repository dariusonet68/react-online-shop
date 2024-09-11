/* eslint-disable no-unused-vars */
import React from 'react';

export default function TopbarContainer() {
  return (
    <div>
      <>
        <header class="d-flex bg-dark text-white border border-light-subtle border-1 p-3">
          <div class="d-flex container ">
            <div class="d-flex  justify-content-lg-start">
              <a class="d-flex col-lg-auto me-lg-auto mb-2 mb-md-0">SHOP</a>
            </div>
            <div className="d-flex  ">
              <ul className="d-flex justify-content-around border border-1">
                <li className="d-flex">Home</li>
                <li className="d-flex">Products</li>
                <li className="d-flex">About</li>
              </ul>
            </div>
          </div>
        </header>
      </>
    </div>
  );
}

/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default function TopbarContainer() {
  return (
    <div>
      <>
        <header class="d-flex bg-dark">
          <div class="d-flex  ">
            <div class="d-flex container-fluid justify-content-lg-start">
              <Link to={'/'} class="d-flex col-lg-auto me-lg-auto md-0 ">
                <h2>React Online Shop</h2>
              </Link>
            </div>
          </div>
        </header>
      </>
    </div>
  );
}

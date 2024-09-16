/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const ProductComponent = ({ title, images, price }) => {
  return (
    <>
      <div
        className="d-flex col-md-4 mb-4 "
        style={{ width: '200px', height: '400px' }}
      >
        <div className="card bg-dark text-light border-white">
          <img
            src={images}
            className="d-flex card-img-top "
            alt={title}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="card-body">
            <p className="card-title h5">{title}</p>
            <p className="card-text">Price</p>
            <p className="">${price}</p>
          </div>
          <div></div>
          <div>
            <button className="d-flex btn btn-sm btn-primary">
              Add to Cart
            </button>
            <button className="d-flex btn btn-sm btn-primary">Favorites</button>
          </div>
        </div>
      </div>
    </>
  );
};

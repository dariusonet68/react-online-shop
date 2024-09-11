/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const ProductComponent = ({ title, images, price }) => {
  return (
    <>
      <div
        className="d-flex card m-2 row p-4 border-light-subtle border-1 rounded-4 bg-dark text-light"
        style={{ width: '25rem' }}
      >
        <img
          src={images}
          className="d-flex card-img-top rounded-5 "
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="card-body">
          <p className="card-title h5">{title}</p>
        </div>
        <div>
          <p>Price</p>
          <p className="fs-3">${price}</p>
        </div>
        <div>
          <button
            className="btn btn-sm"
            style={{ background: 'rgb(112 59 247)' }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export const ProductComponent = ({ title, image }) => {
  return (
    <>
      <div className="d-flex card m-2 row" style={{ width: '18rem' }}>
        {' '}
        <img
          src={image}
          className="card-img-top"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="card-body border border-3">
          <p className="card-title">{title}</p>
        </div>
      </div>
    </>
  );
};

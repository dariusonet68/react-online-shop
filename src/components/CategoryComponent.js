import React from 'react';

export const CategoryComponent = ({ name }) => {
  return (
    <div className="d-flex bg-dark ">
      <div className=" p-1">
        <li>
          <a className="">{name}</a>
        </li>
      </div>
    </div>
  );
};

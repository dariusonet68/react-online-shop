import React from 'react';

export const CategoryComponent = ({ name }) => {
  return (
    <div className="col bg-dark">
      <div className="flex-row p-1">
        <li>
          <a className="">{name}</a>
        </li>
      </div>
    </div>
  );
};

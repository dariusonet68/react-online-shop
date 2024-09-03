import React from 'react';

const mealText = { backgroundColor: 'white', color: 'black', pending: '20px' };

const mealTitle = { fontSize: '18px' };

const mealDescription = { fontSize: '14px', color: 'gray' };

const mealCard = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'felx-start',
  gap: '10px',
  border: '1px solid gray',
  borderRadius: '20px',
};

export const MealComponent = ({ strMeal, strMealThumb }) => {
  return (
    <>
      <div className="card m-2" style={{ width: '18rem' }}>
        <img src={strMealThumb} className="card-img-top"></img>
        <div className="card-body border border-3">
          <p className="card-title">{strMeal}</p>
        </div>
      </div>
    </>
  );
};

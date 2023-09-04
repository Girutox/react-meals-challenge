import React from 'react';

const CartContext = React.createContext({
  mealItems: [],
  addMealItemHandler: (mealItem) => {},
  deleteMealItemHandler: (mealId) => {}
});

export default CartContext;
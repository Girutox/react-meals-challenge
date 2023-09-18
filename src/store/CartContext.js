import React from 'react';

const CartContext = React.createContext({
  mealItems: [],
  totalAmount: 0,
  addMealItemHandler: (mealItem) => {},
  deleteMealItemHandler: (mealId) => {}
});

export default CartContext;
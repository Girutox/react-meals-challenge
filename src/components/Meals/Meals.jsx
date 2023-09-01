import React from "react";

import MealsSummary from "./MealsSummary";
import MealsList from "./MealsList";

import CartContext from "../../store/CartContext";

export default function Meals({ rootValue, onPrintChildValue }) {
  return (
    <React.Fragment>
      <CartContext.Provider value={100}>
        <MealsSummary />
      </CartContext.Provider>
      <CartContext.Provider value={200}>
        <MealsList rootValue={rootValue} onPrintChildValue={onPrintChildValue} />
      </CartContext.Provider>
    </React.Fragment>
  )
}
import React from "react";

import MealsSummary from "./MealsSummary";
import MealsList from "./MealsList";

export default function Meals({ rootValue, onPrintChildValue }) {
  return (
    <React.Fragment>
      <MealsSummary />
      <MealsList rootValue={rootValue} onPrintChildValue={onPrintChildValue} />
    </React.Fragment>
  )
}
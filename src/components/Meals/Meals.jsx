import React from "react";

import MealsSummary from "./MealsSummary";
import MealsList from "./MealsList";

export default function Meals({rootValue}) {
  return (
    <React.Fragment>
      <MealsSummary />
      <MealsList rootValue={rootValue} />
    </React.Fragment>
  )
}
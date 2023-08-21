import React from "react";

import MealsSummary from "./MealsSummary";
import MealsList from "./MealsList";

export default function Meals() {
  return (
    <React.Fragment>
      <MealsSummary />
      <MealsList />
    </React.Fragment>
  )
}
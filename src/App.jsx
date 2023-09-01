import Header from "./components/Header/Header";
import MealsImg from './assets/meals.jpg';

import styles from './App.module.scss';
import Meals from "./components/Meals/Meals";

import CartContext from "./store/CartContext";
import { useState } from "react";

function App() {
  const rootValue = 'Value from APP.js!';

  function printChildValueHandler(childValue) {
    // console.log("Value from Child:", childValue);
  }

  return (
    <>
      <CartContext.Provider value={0}>
        <Header />
        <main>
          <div className={styles['main-image']}>
            <img src={MealsImg} alt="A table full of food" />
          </div>
          <Meals rootValue={rootValue} onPrintChildValue={printChildValueHandler} />
        </main>
      </CartContext.Provider>
    </>
  );
}

export default App;

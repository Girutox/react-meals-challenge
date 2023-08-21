import Header from "./components/Header/Header";
import MealsImg from './assets/meals.jpg';

import styles from './App.module.scss';
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles['main-image']}>
          <img src={MealsImg} alt="A table full of food" />
        </div>
        <Meals />
      </main>
    </>
  );
}

export default App;

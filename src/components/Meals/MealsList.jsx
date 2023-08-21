import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import styles from './MealsList.module.scss';

export default function MealsList() {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          <MealItem />
        </ul>
      </Card>
    </section>
  )
}
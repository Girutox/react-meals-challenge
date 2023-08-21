import styles from './MealItem.module.scss';

export default function MealItem() {
  return <li>
    <div className={styles.meal}>
      <div>
        <h3>Sushi</h3>
        <div className={styles.description}>Finest fish and veggies</div>
        <div className={styles.price}>$22.99</div>
      </div>
      <div>
        <span>ADD</span>
      </div>
    </div>
  </li>;
}
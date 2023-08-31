import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';

export default function MealItem({ rootValue, title, subtitle, price }) {
  return <li>
    <div className={styles.meal}>
      <div>
        <h3>{title}</h3>
        <div className={styles.description}>{subtitle}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <div>
        <MealItemForm rootValue={rootValue} />
      </div>
    </div>
  </li>;
}
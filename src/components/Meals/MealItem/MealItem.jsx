import { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';

export default function MealItem({ id, title: name, subtitle: description, price }) {
  const cartContext = useContext(CartContext);

  const addMeal = (amount) => {
    cartContext.addMealItemHandler({
      id,
      name,
      price,
      amount
    })
  }

  return <li>
    <div className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm addMeal={addMeal} />
      </div>
    </div>
  </li>;
}
import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';

import { addMeal } from '../../../store/cartSlice';
import { useDispatch } from 'react-redux';

export default function MealItem({ id, title: name, subtitle: description, price }) {
  const dispatch = useDispatch();

  const addMealItemHandler = (amount) => {
    dispatch(addMeal({
      id,
      name,
      price,
      amount
    }))
  }

  return <li>
    <div className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm addMeal={addMealItemHandler} />
      </div>
    </div>
  </li>;
}
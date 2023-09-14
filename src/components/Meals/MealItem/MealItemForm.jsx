import { useRef } from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../UI/Input';

export default function MealItemForm({ addMeal }) {
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    
    addMeal(+amountRef.current.value);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label='Amount'
        input={
          {
            id: 'amount',
            type: 'number',
            name: 'amount',
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1
          }
        } />
      <button>
        + Add
      </button>
    </form>
  )
}
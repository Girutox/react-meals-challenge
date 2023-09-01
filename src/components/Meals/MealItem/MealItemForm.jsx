import { useRef, useState, useContext } from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../UI/Input';
import CartContext from '../../../store/CartContext';

export default function MealItemForm({rootValue, onPrintChildValue}) {
  const cartContext = useContext(CartContext);

  console.log('MealItemForm values:', cartContext);

  const childValue = 'Value from MealItemForm.jsx';
  onPrintChildValue(childValue);
  const [count, setCount] = useState(0);

  const amountRef = useRef();

  // console.log("Value received from APP.JS: ", rootValue);

  const submitHandler = (e) => {
    e.preventDefault();

    setCount(count + 1);
    // console.log(amountRef.current.value);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {count}
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
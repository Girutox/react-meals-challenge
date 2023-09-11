import { useReducer, useRef, useState } from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../UI/Input';

function countReducer(state, action) {
  return {
    count: state.count + 1
  }
}

export default function MealItemForm({ addMeal }) {
  const [count, setCount] = useState(0);
  const [countState, dispatchCountAction] = useReducer(countReducer, { count: 0 })

  console.log('MAIN COUNT:', count);

  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    // setCount(count + 1);
    // setCount((prev) => {
    //   return prev + 1;
    // });

    setCount((prev) => {
      return prev + 1; // PREV = 0
    });
    setCount((prev) => {
      return prev + 1; // PREV = 1
    });
    setCount((prev) => {
      return prev + 1; // PREV = 2
    });
    setCount((prev) => {
      return prev + 1; // PREV = 3
    });

    // for (let index = 1; index <= 10; index++) {
    //   // setCount(count + 1);
    //   // setCount((prev) => {
    //   //   return prev + 1;
    //   // });
    //   dispatchCountAction();
    // }

    // dispatchCountAction();
    console.log('NEW COUNT:', count);

    // addMeal(+amountRef.current.value);
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
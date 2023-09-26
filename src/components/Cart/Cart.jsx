import Modal from '../UI/Modal';

import styles from './Cart.module.scss';
import CartItem from './CartItem';

import { useSelector, useDispatch } from 'react-redux';
import { addMeal, deleteMeal } from '../../store/cartSlice';

// import { increment, decrement, incrementByAmount } from '../../store/counterSlice';

const Cart = ({ onClose }) => {
  const { mealItems, totalAmount } = useSelector((state) => state.cart)

  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const addMealItemHandler = (mealItem) => {
    dispatch(addMeal(mealItem))
  }

  const deleteMealItemHandler = (id) => {
    dispatch(deleteMeal(id))
  }

  const mealItemsToRender = <ul className={styles['cart-items']}>
    {mealItems.map(item => {
      return (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          addMeal={addMealItemHandler}
          removeMeal={deleteMealItemHandler} />
      )
    })}
  </ul>;

  return (
    <Modal onClose={onClose}>
      <section>
        {mealItemsToRender}
      </section>
      <section>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
          {/* <h4>REDUX VALUE: {count}</h4> */}
        </div>
        <div className={styles.actions}>
          <button className={styles['button--alt']} onClick={onClose}>Close</button>
          {mealItems.length > 0 && <button className={styles.button}>Order</button>}

          {/* <button onClick={() => { dispatch(increment()) }}>+</button>
          <button onClick={() => { dispatch(decrement()) }}>-</button>
          <button onClick={() => { dispatch(incrementByAmount(5)) }}>+5</button> */}
        </div>
      </section>
    </Modal>
  )
}

export default Cart;
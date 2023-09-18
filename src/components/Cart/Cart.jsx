import { useContext } from 'react';
import Modal from '../UI/Modal';

import styles from './Cart.module.scss';
import CartItem from './CartItem';
import CartContext from '../../store/CartContext';

const Cart = ({ onClose }) => {
  const { mealItems, totalAmount, addMealItemHandler, deleteMealItemHandler } = useContext(CartContext);

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
        </div>
        <div className={styles.actions}>
          <button className={styles['button--alt']} onClick={onClose}>Close</button>
          <button className={styles.button}>Order</button>
        </div>
      </section>
    </Modal>
  )
}

export default Cart;
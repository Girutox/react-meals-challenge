import Modal from '../UI/Modal';

import styles from './Cart.module.scss';
import CartItem from './CartItem';

import { useSelector, useDispatch } from 'react-redux';

const Cart = ({ onClose }) => {
  const count = useSelector((state) => state.counter.value);

  const mealItemsToRender = <ul className={styles['cart-items']}>
    {[].map(item => {
      return (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount} />
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
          <span>$0</span>
          <h4>REDUX VALUE: {count}</h4>
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
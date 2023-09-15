import { useContext } from 'react';
import Modal from '../UI/Modal';

import styles from './Cart.module.scss';
import CartIitem from './CartItem';
import CartContext from '../../store/CartContext';

const Cart = ({ onClose }) => {
  const { mealItems } = useContext(CartContext);

  return (
    <Modal onClose={onClose}>
      <section>
        <ul className={styles['cart-items']}>
          {mealItems.map(item => {
            return (
              <CartIitem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount} />
            )
          })}
        </ul>
      </section>
      <section>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>$0</span>
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
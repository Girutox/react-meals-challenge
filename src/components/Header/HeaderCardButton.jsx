import { useContext, useState } from 'react';
import CartIcon from './CartIcon';

import styles from './HeaderCardButton.module.scss';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';

export default function HeaderCardButton() {
  const [showCart, setShowCart] = useState(false);
  const [includeBump, setIncludeBump] = useState(false);
  const cartContext = useContext(CartContext);

  console.log(cartContext);

  const buttonClasses = `${styles.button} ${includeBump && styles.bump}`;

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <>
      <button onClick={showCartHandler} className={buttonClasses}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <span>Your Cart</span>
        <div className={styles.badge}>
          {cartContext.mealItems.length}
        </div>
      </button>
      {showCart &&
        <Modal onClose={hideCartHandler}>
          {JSON.stringify(cartContext.mealItems)}

          <div>
            <button onClick={hideCartHandler}>Close</button>
            <button>Order</button>
          </div>
        </Modal>
      }
    </>
  );
}
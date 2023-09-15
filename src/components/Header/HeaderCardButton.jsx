import { useContext, useEffect, useState } from 'react';
import CartIcon from './CartIcon';

import styles from './HeaderCardButton.module.scss';
import CartContext from '../../store/CartContext';
import Cart from '../Cart/Cart';

export default function HeaderCardButton() {
  const [showCart, setShowCart] = useState(false);
  const [includeBump, setIncludeBump] = useState(false);
  const { mealItems } = useContext(CartContext);

  const buttonClasses = `${styles.button} ${includeBump && styles.bump}`;

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  useEffect(() => {
    if (!mealItems.length) return;

    setIncludeBump(true);

    const timerId = setTimeout(() => {
      setIncludeBump(false);
    }, 300);

    return () => {
      clearTimeout(timerId);
    }
  }, [mealItems])

  return (
    <>
      <button onClick={showCartHandler} className={buttonClasses}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <span>Your Cart</span>
        <div className={styles.badge}>
          {mealItems.length}
        </div>
      </button>
      {showCart && <Cart onClose={hideCartHandler} />}
    </>
  );
}
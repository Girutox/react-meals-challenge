import styles from './CartItem.module.scss';

const CartIitem = ({name, price, amount}) => {
  return <li className={styles['cart-item']}>
    <div>
      <h2>{name}</h2>
      <div className={styles.summary}>
        <span className={styles.price}>${price}</span>
        <span className={styles.amount}>x {amount}</span>
      </div>
    </div>
    <div className={styles.actions}>
      <button>-</button>
      <button>+</button>
    </div>
  </li>
}

export default CartIitem;
import styles from './MealItemForm.module.scss';

export default function MealItemForm() {
  return (
    <form className={styles.form}>
      <label htmlFor="amount">Amount</label>
      <input type="text" id='amount' name='amount' value={1} />
      <button>
        + Add
      </button>
    </form>
  )
}
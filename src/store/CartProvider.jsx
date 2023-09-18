import { useReducer } from "react";
import CartContext from "./CartContext";

//DEFAULT STATE
const defaultState = {
  mealItems: [],
  totalAmount: 0
}

// Funcion reductora
const cartReducer = (state, action) => {
  const currentItems = [...state.mealItems];

  if (action.type === 'add') {    
    const existingItem = currentItems.find((item) => item.id === action.mealItem.id);

    if (existingItem) {
      existingItem.amount += action.mealItem.amount;
    } else {
      currentItems.push(action.mealItem);
    }

    const totalAmount = currentItems.reduce((prev, current) => prev + (current.amount * current.price), 0);

    return {
      mealItems: currentItems,
      totalAmount
    }
  } else if (action.type === 'delete') {
    const existingItem = currentItems.find((item) => item.id === action.mealId);

    let newMeals = null;

    if (existingItem.amount === 1) {
      newMeals = currentItems.filter(item => item.id !== action.mealId)
    } else {
      existingItem.amount -= 1;
      newMeals = currentItems;      
    }

    const totalAmount = newMeals.reduce((prev, current) => prev + (current.amount * current.price), 0);

    return {
      mealItems: newMeals,
      totalAmount
    }
  }

  return {...state};
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addMealItemHandler = (mealItem) => {
    dispatchCartAction({type: 'add', mealItem})
  }

  const deleteMealItemHandler = (mealId) => {
    dispatchCartAction({type: 'delete', mealId})
  }

  const cartProviderValue = {
    mealItems: cartState.mealItems,
    totalAmount: cartState.totalAmount,
    addMealItemHandler,
    deleteMealItemHandler
  };

  return (
    <CartContext.Provider value={cartProviderValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
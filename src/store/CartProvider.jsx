import { useReducer } from "react";
import CartContext from "./CartContext";

//DEFAULT STATE
const defaultState = {
  mealItems: []
}

// Funcion reductora
const cartReducer = (state, action) => {
  if (action.type === 'add') {
    return {
      ...state,
      mealItems: [...state.mealItems, action.mealItem]
    }
  } else if (action.type === 'delete') {

  } else {

  }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addMealItemHandler = (mealItem) => {
    dispatchCartAction({type: 'add', mealItem})
  }

  const cartProviderValue = {
    mealItems: cartState.mealItems,
    addMealItemHandler,
    deleteMealItemHandler: (mealId) => { }
  };

  return (
    <CartContext.Provider value={cartProviderValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
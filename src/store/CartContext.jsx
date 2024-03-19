// CartContext.jsx
import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItems: (item) => {}, // Utilisez le type d'action 'ADD_ITEM'
  removeItem: (id) => {}, // Utilisez le type d'action 'REMOVE_ITEM'
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const updateItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }

    return {
      ...state,
      items: updateItems,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem.quantity === 1) {
      const updateItems = [...state.items];
      updateItems.splice(existingCartItemIndex, 1);
      return { ...state, items: updateItems };
    } else {
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      const updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
      return { ...state, items: updateItems };
    }
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItems = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const removeItems = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  };

  const CartContextValue = {
    items: cart.items,
    addItems: addItems,
    removeItems: removeItems,
  };

  console.log(CartContextValue);

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;

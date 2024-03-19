import { createContext, useReducer } from "react";


const CartContext=createContext({

    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    
});

function cartReducer(state,action){
    if(action.type=='ADD_ITEM'){
         state.items.push(action.item)
    }
    if(action.type==='REMOVE_ITEM')
    {

    }
    return state;

}
export function CartContextProvider({children}){
    useReducer(cartReducer,{items:[]});
    return (
        <CartContext.Provider>{children}</CartContext.Provider>
    )
}
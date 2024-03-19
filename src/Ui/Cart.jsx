import React, { useContext } from 'react'
import Modal from './Modal'
import CartContext from '../store/CartContext'
import { currencyFormatter } from '../utils/formatting';
import Button from './Button';
export default function Cart() {

    const contextCartx=useContext(CartContext)
    const cartTotal=contextCartx.items.reduce((totalPrice,item)=>{
        totalPrice +item.quantity *item.price
    });
  return (
    <Modal className="cart">
        
        <h2>Your Cart</h2>
        <ul>
            {contextCartx.items.map(item=>{
                <li key={item.id}>
                    {item.name}-{item.quantity}
                </li>
            })}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-action">
            <Button textOnly>Close</Button>
        </p>
        </Modal>
  )
}

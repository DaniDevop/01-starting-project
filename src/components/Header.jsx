import React, { useContext } from 'react'
import  logoImg from '../assets/logo.jpg';
import Button from '../Ui/Button';
import CartContext from '../store/CartContext';
export default function Header() {

  const cartCtx=useContext(CartContext);
  const totalCartItems=cartCtx.items.reduce((totalNumberOfItem,item)=>{
    return totalNumberOfItem + item.quantity;
  },0)
  return (
    <header id='main-header'>
        <div id='title'>

        </div>
        <img src={logoImg} alt=""  width={100}/>
        <h1>ReactFood</h1>
         <nav>
            <Button textOnly>Cart { totalCartItems}</Button>
         </nav>
    </header>
    
    
  )
}

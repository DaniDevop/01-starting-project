import React from 'react'
import  logoImg from '../assets/logo.jpg';
import Button from '../Ui/Button';
export default function Header() {
  return (
    <header id='main-header'>
        <div id='title'>

        </div>
        <img src={logoImg} alt=""  width={100}/>
        <h1>ReactFood</h1>
         <nav>
            <Button textOnly>Cart (0)</Button>
         </nav>
    </header>
    
    
  )
}

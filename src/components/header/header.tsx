import { useState } from 'react';
import Cart from '../cart/cart';
import './header.css'
import { FaOpencart } from "react-icons/fa";
import { Product,Carts } from '../../interfaces/interface';

interface Props {
  cart:Carts[]
  deleteCart:Function
  checkOut:Function

}

const Header = (props:Props):JSX.Element => {
  const [openCart, setOpenCart] = useState<boolean>(false)
  const offCart = ():void =>{
    setOpenCart(false)
  }
  console.log(props.cart.length);
  
  return (
    <header>
        <FaOpencart onClick={() => setOpenCart(true)} className='iconHeader'/>
        <span className="countUi">{props.cart.length}</span>
        {openCart ? <Cart checkOut={props.checkOut} deleteCart={props.deleteCart}  cart={props.cart} offCart={offCart}/> : null}
    </header>
  )
}

export default Header
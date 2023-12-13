import { useState } from "react";
import Modal from "../modal/modal";
import "./cart.css";
import { FaRecycle } from "react-icons/fa";
import { Carts } from '../../interfaces/interface';


interface Props {
  offCart:Function
  cart:Carts[]
  deleteCart:Function
  checkOut:Function
}

const Cart = (props:Props): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const offModal = ():void => {
    setOpenModal(false)
  }

  return (
    <section className="cartOverlay">
      <div className="cart">
        <h1>Your Cart</h1>
        <ul className="listCarts">
          {props.cart.map((item:Carts) =>{
            return (
          <li key={item.id} className="cartItem">
            <img src={item.imageUrl} alt="" />
            <p>{item.name}</p>
            <div className="cartQuantity">
              <span>{item.quantity}</span>
              <button>-</button>
              <button>+</button>
            </div>
            <p>{item.price * item.quantity}</p>
            <FaRecycle 
            onClick={() => props.deleteCart(item.id)}
            className="iconListCart" 
            />
          </li>
          )})}
        </ul>
        <div className="btnCart">
          <button onClick={() => props.offCart()}>ESC</button>
          <button onClick={() => setOpenModal(true)}>CHECK OUT</button>
        </div>
      </div>
      {openModal ? <Modal checkOut={props.checkOut} offModal={offModal}/> : null}
      
    </section>
  );
};

export default Cart;

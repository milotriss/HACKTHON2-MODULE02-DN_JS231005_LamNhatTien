import React, { useState } from 'react';
import './App.css';
import Products from './components/products/products';
import Header from './components/header/header';
import { Product,Carts } from './interfaces/interface';

const products:Product[] = [
  {
    id:1,
    name: "Airpods Pro",
    price: 24900,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
    stock: 10,
    slogan: "Wireless Noise Cancelling Earphones",
    desc: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings."
  },
  {
    id:2,
    name: "Apple Watch",
    price: 40900,
    imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
    stock: 15,
    slogan: "You’ve never seen a watch like this",
    desc: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass."
  },
  {
    id:3,
    name: "Macbook Pro",
    price: 199900,
    imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
    stock: 20,
    slogan: "The best for the brightest",
    desc: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user."
  },
  {
    id:4,
    name: "iPhone 11 pro",
    price: 106600,
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
    stock: 35,
    slogan: "Pro cameras. Pro display. Pro performance",
    desc: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."
  },
  {
    id:5,
    name: "iPad Pro",
    price: 71900,
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
    stock: 25,
    slogan: "Your next computer is not a computer",
    desc: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro."
  }
]

function App():JSX.Element {
  const [product,setProducts] = useState<Product[]>(products)
  const [cart,setCart] = useState<Carts[]>([])
  
  const addCart = (id:number):void =>{
    let needCart:any = product.find((item:Product) => item.id === id);
    let newCart = [...cart]
    if (cart.length === 0) {
      newCart.push({
        ...needCart,
        quantity:1
      })
    }else {
        let checkCart:number = newCart.findIndex((item:Carts) => item.id === id)
        if (checkCart === -1) {
          newCart.push({
            ...needCart,
            quantity:1
          })
        }else{
          newCart.forEach((item:Carts) =>{
            if (item.id === id) {
              newCart[checkCart].quantity = item.quantity + 1
            }
          })
        }
    }
    
    setCart(newCart)
  }
  const deleteCart = (id:number):void =>{
    let newCart:Carts[] = cart.filter((item:Carts) => item.id !== id)
    setCart(newCart)
  }
console.log(cart);

  const checkOut = ():void=> {
    setCart([])
  }
  return (
    <div className="App">
      <Header checkOut={checkOut} deleteCart={deleteCart} cart={cart}/>
      <Products cart={cart} addCart={addCart} product={product}/>
    </div>
  );
}

export default App;

import React from "react";
import { useContext } from "react";
import { useCart } from "../context/cartContext";

const Cart = () => {
    const cart = useCart();
    const total = cart.items.reduce((a,b) => a + b.price, 0);
    console.log(cart,total);
    return(
        <div>
            <h1>Cart Items</h1>
            {
                cart && cart.items.map((item)=>(
                   <li>
                          {item.name}-${item.price}
                   </li>
                ))
            }
            <h5>Total Bill is : ${total}</h5>
        </div>
    )
}
export default Cart;
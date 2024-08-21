import React from "react";

import { useCart } from '../context/cartContext'

const Items = (props) =>{
    const cart = useCart();
    // const CartState = useContext(CartContext);//this is not a good practise
    //we can create a custom hook like usecart and use that hook in the component
   
    return(
        <div className="item-cart">
            <h4>{props.name}</h4>
            <p>Price : ${props.price}</p>
            <button onClick={()=>cart.setItems([...cart.items,{name: props.name,price: props.price},

            ])
        }>Add to Cart</button>
        </div>
    )
}

export default Items;
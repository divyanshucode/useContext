import { createContext,useContext} from "react";
import { useState } from "react";

const CartContext = createContext(null);

//create a custom hook so we dont have to import context and use context in every component
export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = (props) => {
    const [items,setItems] = useState([]);
    return (
        <CartContext.Provider value={{items,setItems}}>
           {props.children}
        </CartContext.Provider>

    )

}

export default CartContext;
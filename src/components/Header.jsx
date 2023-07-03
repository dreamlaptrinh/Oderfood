import React, { useEffect, useState } from "react";
import {FaShoppingCart} from "react-icons/fa"
import { actionNew } from "../contexts/reducer";
import { useStateValue } from "../contexts/StateProvider";


function HeaderApp(){

    const [{cartShow, cartItems}, dispatch] = useStateValue();
    const showCart = () => {
        dispatch({
        type: actionNew.SET_CART_SHOW,
        cartShow: !cartShow,
        });
    };
    const [sum, setSum] = useState(0);
    useEffect(() => {
        let sumQty = cartItems.reduce(function (sum, item) {
          return sum + item.qty;
        }, 0);
        setSum(sumQty);
      }, [sum, cartItems]);
    return(
        <div className=" bg-orange-500 flex items-center justify-around h-16">
            <div className=" text-2xl font-semibold text-white">ReactMeals</div>
            <div className=" bg-gray-700 flex text-white w-48 h-12 rounded-3xl gap-4 items-center justify-center"
                onClick={showCart}
            >
                <FaShoppingCart/>
                <div>Your Cart</div>
                <div className=" bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center">{sum}</div>
            </div>
        </div>
    )
}

export default HeaderApp
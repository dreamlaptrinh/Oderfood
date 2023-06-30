import React, { useState } from "react";
import CheckOut from "./checkOut";
import { useStateValue } from "../contexts/StateProvider";
import CartItem from "./cartItem";


function CartContainer ({showCart}){

    const[loadBut,setLoadBut] = useState(true)
    const[loadCheck, setLoadCheck] = useState(false);
    const showCheck = ()=>{
        setLoadCheck(true)
        setLoadBut(false);
    }
    const [{cartItems }, dispatch] = useStateValue();


    return ( 
        <div className="text-black bg-gray-200 fixed w-[450px] h-[300px] top-16 right-0 rounded-3xl ">
            {cartItems && cartItems.length > 0 ? (
                <div className="CartElement overflow-y-scroll scrollbar-none h-[200px]">
                {cartItems && cartItems.map((item) => (
                    <CartItem
                    item = {item}
                    />
                ))}
                </div>
            ):(
                <div className="w-[200px] h-[50px] flex mx-auto my-2 rounded-3xl items-center justify-center border-orange-500 border-2">
                <div className="text-base font-semibold text-orange-500">Cart Empty...</div>
                </div>
            )}
                <div className="CartTot mt-2">
                    <div className="flex justify-between w-full mt-3 px-4 ">
                        <div className="text-base font-semibold">Total Amount</div>
                        <div className="text-base font-semibold">$91.96</div>
                    </div>
                    {loadBut === true ? (<div className="flex flex-row-reverse mr-3 gap-3 mt-6">
                        <button className="w-20 h-8 border-orange-500 bg-orange-500 border-2 flex justify-center items-center rounded-xl text-white"
                            onClick={showCheck}
                        >Order</button>
                        <button className="w-20 h-8 border-orange-500 border-2 flex justify-center items-center rounded-xl text-orange-500"
                            onClick={showCart}
                        >Close</button>
                    </div>) : (null)}
                    {loadCheck === true ? (<CheckOut showCart = {showCart}/>) : (null)}
                </div>
        </div>
    )
}
export default CartContainer
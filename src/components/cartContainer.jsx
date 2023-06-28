import React, { useState } from "react";
import CheckOut from "./checkOut";




function CartContainer ({showCart}){
    const[loadBut,setLoadBut] = useState(true)
    const[loadCheck, setLoadCheck] = useState(false);
    const showCheck = ()=>{
        setLoadCheck(true)
        setLoadBut(false);
    }

    return (
        <div className="text-black bg-gray-200 fixed w-[450px] h-[200px] top-16 right-0 rounded-3xl">
            <div className="CartElement">
            <div className="flex justify-between w-full mt-6 px-3 ">
                <div className="flex w-[150px] justify-around">
                    <div className="flex flex-col w-full">
                        <div className="text-base font-semibold">Sushi</div>
                        <div className="text-sm font-medium text-orange-800">$22.99</div>
                    </div>
                    <div className="flex items-center justify-center w-full">    
                        <div className="border-2 w-8 h-8 rounded-md flex items-center justify-center text-sm font-medium">x4</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="w-8 h-6 flex items-center justify-center border-2 border-orange-500 rounded-md">-</button>
                    <button className="w-8 h-6 flex items-center justify-center border-2 border-orange-500 rounded-md">+</button>
                </div>
            </div>
            <div className="mt-4 border-b-2 border-orange-500 w-[400px] flex justify-center m-auto"></div>
            </div>
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
    )
}
export default CartContainer
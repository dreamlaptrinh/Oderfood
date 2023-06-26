import React from "react";
import {FaShoppingCart} from "react-icons/fa"


function HeaderApp(){
    return(
        <div className=" bg-orange-500 flex items-center justify-around h-16">
            <div className=" text-2xl font-semibold text-white">ReactMeals</div>
            <div className=" bg-gray-700 flex text-white w-48 h-12 rounded-3xl gap-4 items-center justify-center">
                <FaShoppingCart/>
                <div>Your Cart</div>
                <div className=" bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center">0</div>
            </div>
        </div>
    )
}

export default HeaderApp
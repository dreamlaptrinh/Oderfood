import React, { useEffect } from "react";
import CartContainer from "./cartContainer";
import {useStateValue} from "../contexts/StateProvider"

function MainApp(){

    const [{ cartShow }] = useStateValue();
    useEffect(() => {}, [cartShow]);

    return(
        <div>
            <div className="text-white w-[660px] h-[230px] bg-gray-700 m-auto mt-[50px] rounded-3xl">
                <div className="text-2xl font-semibold pt-5">Delicious Food, Delivered To You</div>
                <div className="text-sm font-medium pt-6">
                    Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</div>
                <div className="text-sm font-medium pt-6">
                    All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</div>
            </div>
            <div className="bg-white w-[800px] h-[500px] rounded-3xl m-auto mt-[50px] flex flex-col">
                    <div className="flex items-center w-full justify-between px-4 py-6">
                        <div className="w-48 h-20 bg-orange-300">
                            Hello
                        </div>
                        <div className="flex flex-col items-start w-full ml-2">
                            <div className="Name text-base font-bold">Sushi</div>
                            <div className="Des text-sm font-normal italic">Finest fish and Veggies</div>
                            <div className="Price text-orange-800 text-base font-semibold">$22.99</div>
                        </div>
                        <div className="flex flex-wrap w-44">
                            <div className="text-base font-semibold pr-4">Amount</div>
                            <div className="">
                                <input type="number" className="w-8" />
                            </div>
                            <div className="w-full bg-orange-500 rounded-full cursor-pointer my-2">+Add</div>
                        </div>
                    </div>
                    <div className=" border-b-2 w-[770px] flex justify-center mx-auto"></div>
            </div>

            {cartShow && <CartContainer />}

        </div>
    )
}

export default MainApp
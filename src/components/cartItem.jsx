import React from "react";

function cartItems ({item}){
    return (
            <>
            <div className="flex justify-between w-full mt-6 px-3 ">
            <div className="flex w-[150px] justify-around">
                <div className="flex flex-col w-full">
                    <div className="text-base font-semibold">{item?.name}</div>
                    <div className="text-sm font-medium text-orange-800">${item?.price}</div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="border-2 w-8 h-8 rounded-md flex items-center justify-center text-sm font-medium">x{item.qty}</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button className="w-8 h-6 flex items-center justify-center border-2 border-orange-500 rounded-md">-</button>
                <button className="w-8 h-6 flex items-center justify-center border-2 border-orange-500 rounded-md">+</button>
            </div>
        </div><div className="mt-4 border-b-2 border-orange-500 w-[400px] flex justify-center m-auto"></div>
        </>
    )
}
export default cartItems
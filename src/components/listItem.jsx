import React, { useState } from "react";


function ListItem ({image, name, description, price, addItemtoCart, item}){
    const[qty,setQty] = useState(0)


    return(
        <div className="Item">
                <div className="flex items-center w-full justify-between px-4 py-6">
                    <div className="w-48 h-20 bg-orange-300">
                        <img src={image} alt="" />
                    </div>
                    <div className="flex flex-col items-start w-full ml-2">
                        <div className="Name text-base font-bold">{name}</div>
                        <div className="Des text-sm font-normal italic">{description}</div>
                        <div className="Price text-orange-800 text-base font-semibold">${price}</div>
                    </div>
                    <div className="flex flex-wrap w-44">
                        <div className="text-base font-semibold pr-4">Amount</div>
                        <div className="">
                            <input type="number" min="1" className="w-8" placeholder="0" 
                            onChange={(e) =>
                                setQty({ ...qty, qty: e.target.value })
                                }
                            />
                        </div>
                        <div className="w-full bg-orange-500 rounded-full cursor-pointer my-2"
                            onClick={()=>addItemtoCart(item,qty)}
                        >+Add</div>
                    </div>
                </div>
                <div className=" border-b-2 w-[770px] flex justify-center mx-auto"></div>
        </div>
    )
}
export default ListItem
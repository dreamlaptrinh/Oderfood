import React, { useEffect, useState } from "react";
import CartContainer from "./cartContainer";
import {useStateValue} from "../contexts/StateProvider"
import { actionNew } from "../contexts/reducer";
import secureLocalStorage from "react-secure-storage";
import { fetchCart } from "../contexts/fetchLocalStorageData";

function MainApp(){
    const[data, setData] = useState([])
    const[loadingAdd, setLoadingAdd] = useState(false);


    const[qty,setQty] = useState(0)
    const cartInfo = fetchCart() 
    const[items, setItems]=useState(cartInfo)
    // console.log(qty)
    // console.log(qty.qty)
    const qty1 = qty.qty
    // console.log(qty1)



    useEffect(() => {
        const fetchUserData = () => {
            return fetch("https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals", {method: "GET"})
              .then(response => {
                return response.json()
              })
              .then(data => {
                setData(data)
              })
          }
        fetchUserData()
    }, [])
     
    const [{ cartShow, cartItems }, dispatch] = useStateValue();
    
    useEffect(() => {}, [cartShow]);
    const showCart = () => {
        dispatch({
        type: actionNew.SET_CART_SHOW,
        cartShow: !cartShow,
        });
    };

    const addtoCart = (products) => {
        dispatch({
            type: actionNew.SET_CART_ITEMS,
            cartItems: products,
        })
        secureLocalStorage.setItem("cartItems", JSON.stringify(items));
    }

    const addItemtoCart = (pro) => {
        console.log('quantity', qty);
        console.log('pro', pro);
        setLoadingAdd(!loadingAdd);


        if(qty === 0 || qty?.qty === '0' || qty?.qty === ''){ 
            setLoadingAdd(false);
        }
        else{
            let list = [...cartItems]
            const r = list.findIndex(i => i.id == pro.id)
            console.log('index',r);
            if(r < 0){
                // const neuItem = {...pro, qty1}
                list = [...list,{
                    ...pro,
                    qty1: parseInt(qty.qty)
                }]
                setItems(list)
                addtoCart(list)
            }else{
                // list[r].qty1 = ++list[r].qty1
                list[r] = {
                    ...list[r] ,
                    qty1: parseInt(qty.qty) + list[r].qty1
                }
                setItems(list)
                addtoCart(list)
            }
        }
        if(qty === ''){
            return false
        } 
    }
    console.log(cartItems)

    useEffect(()=>{
        addtoCart(items)
    },[items])

 

    return(
        <div>
            <div className="text-white w-[660px] h-[230px] bg-gray-700 m-auto mt-[50px] rounded-3xl">
                <div className="text-2xl font-semibold pt-5">Delicious Food, Delivered To You</div>
                <div className="text-sm font-medium pt-6">
                    Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</div>
                <div className="text-sm font-medium pt-6">
                    All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</div>
            </div>
            <div className="bg-white w-[800px] h-screen rounded-3xl m-auto mt-[50px] flex flex-col">
                {data.length > 0 && (
                    data.map(item => (
                        <div className="Item">
                            <div className="flex items-center w-full justify-between px-4 py-6">
                                <div className="w-48 h-20 bg-orange-300">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="flex flex-col items-start w-full ml-2">
                                    <div className="Name text-base font-bold">{item.name}</div>
                                    <div className="Des text-sm font-normal italic">{item.description}</div>
                                    <div className="Price text-orange-800 text-base font-semibold">${item.price}</div>
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
                                        onClick={()=>addItemtoCart(item)}
                                    >+Add</div>
                                </div>
                            </div>
                            <div className=" border-b-2 w-[770px] flex justify-center mx-auto"></div>
                        </div>
                    ))
                )}
            </div>

            {cartShow && <CartContainer showCart={showCart} />}

        </div>
    )
}

export default MainApp
import React, { useEffect, useState } from "react";
import CartContainer from "./cartContainer";
import {useStateValue} from "../contexts/StateProvider"
import { actionNew } from "../contexts/reducer";
import secureLocalStorage from "react-secure-storage";
import { fetchCart } from "../contexts/fetchLocalStorageData";
import ListItem from "./listItem";

function MainApp(){
    const[data, setData] = useState([])
    const[loadingAdd, setLoadingAdd] = useState(false);


    const cartInfo = fetchCart() 
    const[items, setItems]=useState(cartInfo)
    // console.log(qty.qty)
    // const qty1 = qty.qty
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

    const addItemtoCart = (pro,q) => {
        console.log('quantity', q);
        console.log('pro', pro);
        setLoadingAdd(!loadingAdd);


        if(q === 0 || q === '0' || q === ''){
            setLoadingAdd(false);
        }
        else{
            let list = [...cartItems]
            const r = list.findIndex(i => i.id === pro.id)
            console.log('index',r);
            if(r < 0){
                // const neuItem = {...pro, qty1}
                list = [...list,{
                    ...pro,
                    qty1: parseInt(q)
                }]
                setItems(list)
                addtoCart(list)
            }else{
                // list[r].qty1 = ++list[r].qty1
                list[r] = {
                    ...list[r] ,
                    qty1: parseInt(q) + list[r].qty1
                }
                setItems(list)
                addtoCart(list)
            }
        }
        if(q === 0){
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
                        <ListItem
                            image = {item.image}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            addItemtoCart={addItemtoCart}
                            item={item}
                        />
                    ))
                )}
            </div>

            {cartShow && <CartContainer showCart={showCart} />}

        </div>
    )
}

export default MainApp
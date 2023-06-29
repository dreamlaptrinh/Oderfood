import { fetchCart } from "./fetchLocalStorageData";


const cartInfo = fetchCart()
export const initialState = {
    cartShow: false,
    cartItems: cartInfo,
};
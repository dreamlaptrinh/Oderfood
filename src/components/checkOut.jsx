import React, { useState } from "react";

function CheckOut({showCart}){
    const [isPopup, setIsPopup] = useState(false);
    const [name,setName] = useState('');
    const [street,setStreet] = useState('');
    const [postal,setPostal] = useState('');
    const [city,setCity] = useState('');
    const [nameError, setNameError] = useState("");
    const [streetError, setStreetError] = useState("");
    const [postalError, setPostalError] = useState("");
    const [cityError, setCityError] = useState("");

    const [info, setInfo] = useState({
        name: "",
        street: "",
        postal: "",
        city: "",
      });
    console.log(info);



    const Pay = async (e) => {
        e.preventDefault();
        setIsPopup(!isPopup);


        localStorage.setItem("userCheck", JSON.stringify(info));
        const dataInfo = JSON.parse(localStorage.getItem("userCheck"));
        const nameN = dataInfo.name;
        const streetN = dataInfo.street;
        const postalN = dataInfo.postal;
        const cityN = dataInfo.city;
        setName (nameN)
        setStreet (streetN)
        setPostal (postalN)
        setCity (cityN)
        setInfo ({
            name: "",
            street:"",
            postal:"",
            city:"",
        })


        if (info.name === "") {
            setNameError("Please enter a valid name!");
            setIsPopup(false);
          } else {
            setNameError("");
            setIsPopup(true);
          }

        if (info.street === "") {
            setStreetError("Please enter a valid street!");
            setIsPopup(false);
          } else {
            setStreetError("");
            setIsPopup(true);
          }

        if (info.postal === "") {
            setPostalError("Please enter a valid postal code (5characters long)!");
            setIsPopup(false);
          } else {
            setPostalError("");
            setIsPopup(true);
          } 
        
        if (info.city === "") {
            setCityError("Please enter a valid city!");
            setIsPopup(false);
          } else {
            setCityError("");
            setIsPopup(true);
          }

        if (
            info.name === "" ||
            info.street === "" ||
            info.postal === "" ||
            info.city === ""
          ) {
            return false;
          }
        
    }

    
    return(
        <>
        {isPopup ? 
            (
                <div className="bg-white fixed flex flex-col w-[350px] h-[100px] left-[0] top-16 rounded-3xl">
                    <div className="text-base font-semibold flex mt-4 ml-2">Successfully sent the order, {name}</div>
                    <div className="flex flex-row-reverse mr-2 mt-4">
                    <button
                    className="w-20 h-8 border-orange-500 bg-orange-500 border-2 flex flex-row-reverse justify-center items-center rounded-xl text-white" 
                    onClick={showCart}
                    >Close</button>
                    </div>
                </div>
            ) 
            :(
                <form className="bg-gray-200 flex flex-col rounded-b-3xl">
                 {/* ---- */}
                <label htmlFor=""
                    className=" text-black flex ml-2 text-base font-medium mt-4"
                    >Your Name</label>
                <input type="text" 
                    className="w-[300px] ml-2 border-[1px] border-black"
                    onChange={(e) =>
                        setInfo({ ...info, name: e.target.value })
                      }
                    />
                <div className="required flex ml-2 text-red-600" >{nameError}</div>
                 {/* ---- */}
                <label htmlFor=""
                    className=" text-black flex ml-2 text-base font-medium"                
                    >Street</label>
                <input type="text"
                    className="w-[300px] ml-2 border-[1px] border-black"
                    onChange={(e) =>
                        setInfo({ ...info, street: e.target.value })
                      }
                    />
                <div className="required flex ml-2 text-red-600">{streetError}</div>
                 {/* ---- */}
                <label htmlFor=""
                    className=" text-black flex ml-2 text-base font-medium"   
                    >Postal Code</label>
                <input type="number"
                    className="w-[300px] ml-2 border-[1px] border-black"
                    onInput={(e) => (e.target.value = e.target.value.slice(0, 5))}
                    onChange={(e) =>
                        setInfo({ ...info, postal: e.target.value })
                      }  
                    />
                <div className="required flex ml-2 text-red-600">{postalError}</div>
                 {/* ---- */}
                <label htmlFor=""
                    className=" text-black flex ml-2 text-base font-medium"   
                    >City</label>
                <input type="text"
                    className="w-[300px] ml-2 border-[1px] border-black" 
                    onChange={(e) =>
                        setInfo({ ...info, city: e.target.value })
                      }
                    />
                <div className="required flex ml-2 text-red-600">{cityError}</div>
                 {/* ---- */}
                <div className="flex flex-row-reverse mr-3 gap-3 my-6">
                    <button className="w-20 h-8 border-orange-500 bg-orange-500 border-2 flex justify-center items-center rounded-xl text-white"
                    onClick={Pay}    
                        >Confirm</button>
                    <button className="w-20 h-8 border-orange-500 border-2 flex justify-center items-center rounded-xl text-orange-500"
                    onClick={showCart}
                    >Cancel</button>
                </div>
                </form>
            )}
            </>
    )
}
export default CheckOut
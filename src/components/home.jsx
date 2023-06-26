import React from "react";
import MainApp from "./main"
import HeaderApp from "./Header";

function Home (){
    return(
        <div className="bg-[url('/src/components/123.jpg')] w-full h-screen bg-no-repeat bg-cover bg-center">
        <HeaderApp />
        <MainApp />
        </div>
    )
}
export default Home;
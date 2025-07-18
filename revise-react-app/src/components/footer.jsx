import React from "react";
import logo from "../assets/nasa_1.png"

export default function Footer(props){
    return(
        <footer  className="bg-blue-500">
            <div className=" flex flex-col items-center text-white p-4 justify-content">
                <img src={logo} className="max-h-30"/>
                <h1 className="text-7xl mt-6 mb-3  font-thin">THANKS FOR REVIEWING!!</h1> 
               
            </div>
            <div>
                <span><span className="font-bold">{props.student}</span> was supervised by <span className="font-bold">{props.teacher}</span></span>
            </div>
                
        </footer>
    )
}
import React from "react";
import logo from "../assets/nasa_1.png"

export default function Header(){
    return(
        <header className="bg-blue-200 p-4">
            <div className="flex justify-center align-middle">
                <img src={logo} className="max-h-32"/>
                <h1 className="text-7xl mt-6 mb-3 font-thin">Selina's react assignmnet</h1>
            </div>
            
            <nav>
                <ol className="flex justify-around">
                    <li >
                        <a href="/" className="text-3xl align-text-bottom font-extralights  font-mono hover:underline">Homepage</a>
                    </li>
                    <li>
                        <a href="/fancyPage" className="text-3xl align-text-bottom font-extralights  font-mono hover:underline">Fancy Page</a>
                    </li>
                    <li>
                        <a href="/lastPage" className="text-3xl align-text-bottom font-extralights  font-mono hover:underline">Last Page</a>
                    </li>

                </ol>
            </nav>
        </header>
    )
}
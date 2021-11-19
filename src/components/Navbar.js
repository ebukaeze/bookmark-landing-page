import React, {useState} from 'react';

const Navbar = () => {
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <nav  className="container flex items-center py-4 mt-4 sm:mt-12">
            <div className="py-1"> <img src={require("../assets/images/logo-bookmark.svg").default}  alt=""/></div>
            <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-dark-blue uppercase text-sm font-bold ">
                <li className="cursor-pointer hover:text-bookmark-red">features</li>
                <li className="cursor-pointer hover:text-bookmark-red">Pricing</li>
                <li className="cursor-pointer hover:text-bookmark-red">contact</li>
                <button type="button" className="bg-bookmark-red text-white rounded-md px-6 py-2 uppercase shadow-sm hover:bg-transparent hover:text-bookmark-red border-2 border-solid border-bookmark-red">Login</button>
            </ul>
            <div className="flex sm:hidden flex-1 justify-end cursor-pointer" onClick={handleClick}>
                
                { click ?
                <img src={require("../assets/images/icon-hamburger.svg").default} alt="menu"/>
                 :
                 <img src={require("../assets/images/icon-close.svg").default}  alt="close"/>
                }
            </div>
            
        </nav>
    )
}

export default Navbar

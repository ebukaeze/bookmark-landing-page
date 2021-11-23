import React, {useState} from 'react';

const Navbar = () => {
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <nav  className="container flex items-center py-4 mt-4 sm:mt-12">
            <div className="py-1 sm:relative absolute top-5 left-7 z-40"> {click ? <img src={require("../assets/images/logo-footer.svg").default}  alt=""/> :<img src={require("../assets/images/logo-bookmark.svg").default}  alt=""/>}</div>

            <div className={`${click? "flex" : "hidden"} sm:flex flex-1 sm:justify-end sm:bg-white${click && "flex top-0 absolute sm:relative z-30 left-0 w-full h-full bg-bookmark-blue-trans sm:bg-white text-white flex-col items-center justify-center transition-all"}`}>
            
            <ul className={`flex sm:flex flex-col sm:flex-row flex-1 sm:justify-end items-center gap-12 text-white sm:text-bookmark-dark-blue uppercase sm:text-base sm:font-medium ${click && "flex justify-center flex-col text-white text-xl font-light"}` }>
                <li className="cursor-pointer hover:text-bookmark-red">features</li>
                <li className="cursor-pointer hover:text-bookmark-red">Pricing</li>
                <li className="cursor-pointer hover:text-bookmark-red">contact</li>
                <button type="button" className={`${ click ? "bg-transparent px-24 border-white border-solid border-2" : "bg-bookmark-red px-6 sm:border-bookmark-red"} text-white rounded-md  py-2 uppercase shadow-sm hover:bg-transparent hover:text-bookmark-red border-2 border-solid `}>Login</button>
            </ul>
            <div className="flex sm:hidden gap-10 mt-8 md:mt-0 mb-10">
                <li className="list-none"><img src={require("../assets/images/icon-facebook.svg").default} alt="facebook"/></li>
                  <li className="list-none"><img src={require("../assets/images/icon-twitter.svg").default} alt="facebook"/></li>

            </div>
            </div>
            <div className="flex sm:hidden flex-1 justify-end cursor-pointer z-40 absolute top-5 right-7" onClick={handleClick}>
                
                { click ?
                <img src={require("../assets/images/icon-close.svg").default}  alt="close"/>
                :
                <img src={require("../assets/images/icon-hamburger.svg").default} alt="menu"/>
                 
                 
                }
            </div>
            
        </nav>
    )
}

export default Navbar

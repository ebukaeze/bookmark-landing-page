import React,{useEffect, useState} from 'react';

const Footer = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const validateEmail = (checkEmail)=> {
        setInput(checkEmail);
        console.log(checkEmail);
        /* if(input !== ""){
         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(checkEmail); 

        }*/
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        setError(validate(input));
        setIsSubmit(true);
    } 
    useEffect(() => {
        console.log(error);
        if(Object.keys(error).length === 0 && isSubmit){
            console.log(input);
        }
    }, [error])
    const validate = (values)=>{
      let errors = "";
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
      if(values === ""){
        errors = "Email is required";
      }
      else if(!re.test(values)){
          errors = "Whoops, make sure it's an email"
      }
      return errors;

    }
    return (
        <div>
        <div className="w-full bg-bookmarK-blue text-white mt-26 py-20">
            <div className="cntainer">
                <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                 <p className="font-light uppercase text-center mb-8">35,000+ already joined</p>
                 <h1 className="text-3xl text-center font-semibold"> Stay up-to-date with what we're doing</h1>
                 <div className="flex flex-col px-10 sm:flex-row gap-6 mt-8">
                     <div className="flex flex-col">
                     <input 
                     type="text" placeholder="Enter your email address"
                     value={input}
                     onChange={(e) => validateEmail(e.target.value)}
                      className={` ${error === "" ? "" : "border-2 border-bookmark-red border-solid bg-err-bg bg-no-repeat bg-right bg-auto px-4"}focus:outline-none flex-1 px-2 py-3 rounded-md text-black `}
                       />
                       <div className={`${error === "" ? "hidden" : "flex"} flex flex-row flex-1 bg-bookmark-red py-2 px-2 rounded-b-md`}>
                       <p className="italic">{error}</p>
                       </div>
                       </div>
                       <button type="button" onClick={handleSubmit} className="bg-bookmark-red text-white font-semibold rounded-md px-6 py-2 uppercase shadow-sm hover:bg-white hover:text-bookmark-red border-2 border-solid border-bookmark-red">Contact Us</button>
                 </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-bookmark-dark-blue py-8">
            <div className="container flex flex-col sm:flex-row items-center">
                <div className="flex flex-1 items-center flex-col sm:flex-row justify-center md:justify-start gap-12">
                <div className="py-1"> <img src={require("../assets/images/logo-footer.svg").default}  alt=""/></div>
            <ul className="flex flex-col sm:flex-row text-white uppercase text-sm font-bold gap-12">
                <li className="cursor-pointer hover:text-bookmark-red">features</li>
                <li className="cursor-pointer hover:text-bookmark-red">Pricing</li>
                <li className="cursor-pointer hover:text-bookmark-red">contact</li>
            </ul>
            </div>
            <div className="flex gap-10 mt-12 md:mt-0">
                <li className="list-none"><img src={require("../assets/images/icon-facebook.svg").default} alt="facebook"/></li>
                  <li className="list-none"><img src={require("../assets/images/icon-twitter.svg").default} alt="facebook"/></li>

            </div>
            </div>
        </div>
        </div>
    )
}

export default Footer

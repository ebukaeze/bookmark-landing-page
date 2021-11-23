import React,{useState} from 'react';

const Faq = () => {
 const [faq, setFaq] = useState(true);
 const [faq2, setFaq2] = useState(true);
 const [faq3, setFaq3] = useState(true);
 const [faq4, setFaq4] = useState(true);

 const handleFaq = () => setFaq(!faq);
 const handleFaq2 = () => setFaq2(!faq2);
 const handleFaq3 = () => setFaq3(!faq3);
 const handleFaq4 = () => setFaq4(!faq4);

    return (
        <section className="bg-white py-20 px-2  mt-20 lg:mt-24">
            <div className="sm:w-3/4 lg:5/12 mx-auto px-2">
                <h1 className="text-bookmark-dark-blue text-center text-3xl font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-center text-bookmark-grey mt-4 lg:w-7/12 lg:mx-auto text-lg font-normal">
                    We've got more browsers in the pipeline. Please do let us know if you've got a favourite you would like us to prioritize.
                </p>
            </div>
            <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                {/* faq 1 */}
               <div className="flex items-center border-b py-4 border-t">
                   <span className="flex-1 hover:text-bookmark-red cursor-pointer">What is Bookmark?</span>
                   <button onClick={handleFaq}>
                       { faq ?
                           <img src={require("../assets/images/icon-arrow.svg").default} alt="arrow"/> 

                           :
                           <img className="transform -rotate-180 transition-all" src={require("../assets/images/icon-arrow-up.svg").default} alt="arrow"/> 
                       }  </button>
               </div>
               <div className={`flex mt-12 transition-all mb-20 ${faq && "hidden"}`}>
                       <p>Bookmark is a way to save your favourite websites in the browser. With Our extensions everything is made easy and convinient for your work.</p>
                   </div>

                   {/* faq 2 */}
                   <div className="flex items-center border-b py-4">
                   <span className="flex-1 hover:text-bookmark-red cursor-pointer">How can I request a new browser?</span>
                   <button onClick={handleFaq2}>
                       { faq2 ?
                           <img src={require("../assets/images/icon-arrow.svg").default} alt="arrow"/> 

                           :
                           <img className="transform -rotate-180 transition-all" src={require("../assets/images/icon-arrow-up.svg").default} alt="arrow"/> 
                       }  </button>
               </div>
               <div className={`flex mt-12 transition-all mb-20 ${faq2 && "hidden"}`}>
                       <p>How do you request a new browser! well it's very simple, all you need to do is click on the help button in the bottom left of the extension's home page, after clicking you'll be redirected to a page. A form will be provided for you to fill in for a request.</p>
                   </div>

                   {/* faq 3 */}
                   <div className="flex items-center border-b py-4">
                   <span className="flex-1 hover:text-bookmark-red cursor-pointer">Is there a mobile app?</span>
                   <button onClick={handleFaq3}>
                       { faq3 ?
                           <img src={require("../assets/images/icon-arrow.svg").default} alt="arrow"/> 

                           :
                           <img className="transform -rotate-180 transition-all" src={require("../assets/images/icon-arrow-up.svg").default} alt="arrow"/> 
                       }  </button>
               </div>
               <div className={`flex mt-12 transition-all mb-20 ${faq3 && "hidden"}`}>
                       <p>Do we have a mobile app? well, currently we do not have a mobile app, but our team of developers are working together to build a mobile app, for now please do enjoy what our extension provides, we're really pleased to be at your service.</p>
                   </div>

                   {/* faq 4 */}
                   <div className="flex items-center border-b py-4">
                   <span className="flex-1 hover:text-bookmark-red cursor-pointer">What about other chromium browsers?</span>
                   <button onClick={handleFaq4}>
                       { faq4 ?
                           <img src={require("../assets/images/icon-arrow.svg").default} alt="arrow"/> 

                           :
                           <img className="transform -rotate-180 transition-all" src={require("../assets/images/icon-arrow-up.svg").default} alt="arrow"/> 
                       }  </button>
               </div>
               <div className={`flex mt-12 transition-all mb-20 ${faq4 && "hidden"}`}>
                       <p>Bookmark is a way to save your favourite websites in the browser. With Our extensions everything is made easy and convinient for your work.</p>
                   </div>

                   <div className="my-10 p-2 flex items-center justify-center">
                         <button type="button" className="btn btn-purple hover:bg-transparent hover:text-bookmark-purple border-solid border-2 border-transparent hover:border-bookmark-purple px-4">More Info</button>
                     </div>
            </div>
        </section >
    )
}

export default Faq

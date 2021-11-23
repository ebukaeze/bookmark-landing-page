import React from 'react'

const Extensions = () => {
    return (
        <section className="bg-white py-20  mt-20 lg:mt-24">
            <div className="sm:w-3/4 lg:5/12 mx-auto px-2">
                <h1 className="text-bookmark-dark-blue text-center text-3xl font-semibold">
                    Download the extension
                </h1>
                <p className="text-center text-bookmark-grey mt-4 lg:w-7/12 lg:mx-auto font-normal text-lg">
                    We've got more browsers in the pipeline. Please do let us know if you've got a favourite you would like us to prioritize.
                </p>
            </div>
            <div className="relative mt-20 lg:mt-24">
                {/* Cards container */}
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                    {/* Card #1 */}
                    <div className="flex flex-col rounded-md bg-white shadow-lg lg:mb-16">
                        <div className="p-6 flex flex-col items-center">
                            <img className="" src={require("../assets/images/logo-chrome.svg").default} alt="chrome"/>
                            <h3 className="mt-5 mb-2 text-bookmark-dark-blue text-lg">Add to Chrome</h3>
                            <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
                        </div>
                        <hr className="border-b border-bookmark-grey border-dotted border-t-4 border-separate "/>
                        <div className="my-4 p-4 flex items-center justify-center">
                         <button type="button" className="btn btn-purple hover:bg-transparent hover:text-bookmark-purple border-solid border-2 border-transparent hover:border-bookmark-purple px-4">Add & Install Extension</button>
                     </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-col rounded-md bg-white shadow-lg lg:my-8">
                        <div className="p-6 flex flex-col items-center">
                            <img className="" src={require("../assets/images/logo-firefox.svg").default} alt="chrome"/>
                            <h3 className="mt-5 mb-2 text-bookmark-dark-blue text-lg">Add to Firefox</h3>
                            <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
                        </div>
                        <hr className="border-b border-bookmark-grey border-dotted border-t-4 border-separate "/>
                        <div className="my-4 p-4 flex items-center justify-center">
                         <button type="button" className="btn btn-purple hover:bg-transparent hover:text-bookmark-purple border-solid border-2 border-transparent hover:border-bookmark-purple px-4">Add & Install Extension</button>
                     </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-col rounded-md bg-white shadow-lg lg:mt-16">
                        <div className="p-6 flex flex-col items-center">
                            <img className="" src={require("../assets/images/logo-opera.svg").default} alt="chrome"/>
                            <h3 className="mt-5 mb-2 text-bookmark-dark-blue text-lg">Add to Opera</h3>
                            <p className="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
                        </div>
                        <hr className="border-b border-bookmark-grey border-dotted border-4 border-separate"/>
                        <div className="my-4 p-2 flex items-center justify-center">
                         <button type="button" className="btn btn-purple hover:bg-transparent hover:text-bookmark-purple border-solid border-2 border-transparent hover:border-bookmark-purple px-4">Add & Install Extension</button>
                     </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Extensions

import React from 'react';

const Main = () => {
    return (
        <section className="relative">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-20">
                <div className="flex flex-1 flex-col items-center lg:items-start">

                    <h2 className="text-bookmark-dark-blue text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left mb-6">
                        A Simple Bookmark Manager
                    </h2>
                    <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
                        A clean and simple interface to organize your websites. Open a new browser tab and see your site load instantly. Try it for free.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <button type="button" className="btn btn-purple hover:bg-transparent hover:text-bookmark-purple border-solid border-2 border-transparent hover:border-bookmark-purple">Get it on Chrome</button>
                        <button type="button" className="btn btn-white hover:bg-transparent hover:text-bookmark-dark-blue border-solid border-2 border-transparent hover:border-bookmark-dark-blue">Get it on Firefox</button>
                    </div>
                </div>
                 <div className="flex flex-1 justify-center mb-10 md:mb-16 lg:mb-0 z-10">
                   <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={require("../assets/images/illustration-hero.svg").default} alt="hero"/>
                     </div>
            </div>
            {/* Rounded Rectangle */}
            <div className=" md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute top-16 sm:top-32 right-0 w-2/4 sm:w-1/3 h-2/6 sm:h-72 lg:-bottom-24 lg:-right-0 ">

            </div>
        </section >
    )
}

export default Main

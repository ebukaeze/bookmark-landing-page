import React from 'react'
import Panel from './tabs/Panel'
import Tabs from './tabs/Tabs'

const Features = (props) => {
    return (
        <section className="bg-bookmark-white py-20 mt-20 lg:mt-40">
            {/* Heading */}
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center text-bookmark-dark-blue font-semibold">
                    Features
                </h1>
                <p className="text-center text-bookmark-grey mt-4 lg:w-11/12 lg:mx-auto font-normal text-lg">
                    Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <Tabs>
            <Panel title="Simple Bookmarking">
            {/* Features #1 */}
            <div className="relative mt-20 lg:mt-24 transition-all">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                  {/* Images */}
                 <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                     <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={require("../assets/images/illustration-features-tab-1.svg").default} alt="feature-1"/>
                 </div>
                  
                  {/* Content */}

                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-bookmark-dark-blue">Bookmark in one click </h1>
                      <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                          organize your bookmarks however you like. Our simple drag-n-drop interface gives you complete control over how you manage your favourite sites.
                      </p>
                             <button type="button" className="btn btn-purple hover:bg-transparent hover:text-bookmark-purple border-solid border-2 border-transparent hover:border-bookmark-purple">More Info</button>

                      </div>
                </div>

                 {/* Rounded Rectangle */}
            <div className="
            hidden 
            lg:block 
            overflow-hidden
             bg-bookmark-purple
              rounded-r-full
               absolute
                
                 w-2/4 h-72
                -bottom-24
                -left-36">

            </div>
            </div>
            </Panel>
            <Panel  title="Speedy Searching">
            {/* Features #2 */}
            <div className="relative mt-20 lg:mt-24 transition-all">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                  {/* Images */}
                 <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                     <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={require("../assets/images/illustration-features-tab-2.svg").default} alt="feature-1"/>
                 </div>
                  
                  {/* Content */}

                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-bookmark-dark-blue">Intelligent Search </h1>
                      <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                          Our Intelligent search feature will help you fin saved sites in no time at all. No need to trawl through all of your bookmarks.
                      </p>
                             <button type="button" className="btn btn-purple hover:bg-transparent hover:text-bookmark-purple border-solid border-2 border-transparent hover:border-bookmark-purple">More Info</button>

                      </div>
                </div>

                 {/* Rounded Rectangle */}
            <div className="
            hidden 
            lg:block 
            overflow-hidden
             bg-bookmark-purple
              rounded-r-full
               absolute
                
                 w-2/4 h-72
                -bottom-24
                -left-36">

            </div>
            </div>
            </Panel>
            
            {/* Features #3 */}
            <Panel title="Easy Sharing">
            <div className="relative mt-20 lg:mt-24 transition-all">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                  {/* Images */}
                 <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                     <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={require("../assets/images/illustration-features-tab-3.svg").default} alt="feature-1"/>
                 </div>
                  
                  {/* Content */}

                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-bookmark-dark-blue">Share your Bookmarks </h1>
                      <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                        Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of one button.
                      </p>
                             <button type="button" className="btn btn-purple hover:bg-transparent hover:text-bookmark-purple border-solid border-2 border-transparent hover:border-bookmark-purple">More Info</button>

                      </div>
                </div>

                 {/* Rounded Rectangle */}
            <div className="
            hidden 
            lg:block 
            overflow-hidden
             bg-bookmark-purple
              rounded-r-full
               absolute
                
                 w-2/4 h-72
                -bottom-24
                -left-36">

            </div>
            </div>
            </Panel>
            </Tabs>
        </section >
    )
}

export default Features

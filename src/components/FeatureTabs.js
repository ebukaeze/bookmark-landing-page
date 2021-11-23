import React from 'react'

const FeatureTabs = (props) => {
    return (
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                  {/* Images */}
                 <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                     <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={props.image} alt={props.alt}/>
                 </div>
                  
                  {/* Content */}

                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-bookmark-dark-blue">{props.title} </h1>
                      <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                         {props.description}
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
    )
}

export default FeatureTabs

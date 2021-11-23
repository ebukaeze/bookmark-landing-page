import React,{useState} from 'react'

const Tabs = (props) => {
    const [selected, setSelected ] = useState(0);

    const handleChange = (index) =>{
       setSelected(index);
    }
    return (
        <div>
            <ul className="flex flex-col sm:flex-row px-8 items-center w-3/4 sm:w-3/5 mx-auto border-solid border-gray-300 border-b-2  mt-16 text-xl ">{props.children.map((elem, index) =>{
                let style = index === selected ? 'border-b-4 border-bookmark-red border-solid sm:px-8 pb-2 sm:pb-8 transition-all cursor-pointer' : " sm:px-8 pb-2 sm:pb-8 cursor-pointer hover:text-bookmark-red";
                return(
                    <li key={index}
                        className={style}
                        onClick={() => handleChange(index)}>
                            {elem.props.title}
                        </li>
                )
            })}
            </ul>
            <div className="w-full p-7 text-bookmark-red">{props.children[selected]}</div>
        </div>
    )
}

export default Tabs

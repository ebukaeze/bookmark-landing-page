import React from 'react'

const Panel = (props) => {
    return (
        <div className="flex">
            {props.children}
        </div>
    )
}

export default Panel

import React from 'react'

function Heading(props) {
    return (
        <h4>
            {props.text}
        </h4>
    )
}


function RegularText(props) {
    return (
        <p>
            {props.children}
        </p>
    )

}

export { Heading, RegularText };
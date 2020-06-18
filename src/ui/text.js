import React from 'react'

function Heading(props)
{
return(
    <h1>
        {props.text}
    </h1>
)
}


function RegularText(props)
{
    return(
        <p>
            {props.children}
        </p>
    )
   
}

export  {Heading,RegularText};
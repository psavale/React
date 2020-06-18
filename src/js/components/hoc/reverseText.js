import React, { Component } from 'react'

class showWaiting extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            loggedInStatus:"waiting"
        }
    }

    componentDidMount()
    {
        setTimeout(()=>{
                let n= Math.random()*2;
                if(n>3)
                {
                    this.setState({});
                }
                else{this.setState({})};
        },3000);
    }
    render(props) {
        return (<div>{props.children}
        </div>
        )
    }
}

export default showWaiting;
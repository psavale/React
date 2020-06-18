import React, { Component } from 'react';

const withCounter=(WrappedComponet, incrementBy)=>{
    class WithCounter extends Component{

        constructor(props) {
            super(props);

            this.state={
                count:0
            }
        }

        incrementCount=()=>{
                this.setState(prevState=>{
                    return {count:prevState.count+incrementBy}
                })
        }

        render()
        {
            console.log(this.props);
            return(
                <WrappedComponet count={this.state.count} incrementCount={this.incrementCount}
                {...this.props}
                />
            )
        }
        
    }   
    return WithCounter
}
export default withCounter
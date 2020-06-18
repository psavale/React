import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types';
import { react } from 'babel-types';

class RefComp extends Component {
    constructor(props) {
        super(props);

        this.inputRef=React.createRef()
        this.cbRef=null
        this.setCbRef=element=>{
            this.cbRef=element;
        }
    }

    componentDidMount() {
        // console.log("inside component DidMount" +this.inputRef);
        // this.inputRef.current.focus()
        console.log(this.cbRef)
		if (this.cbRef) {
        this.cbRef.focus()
        }
    }

    onClickHandler=()=>{
        alert(this.cbRef.value);
    }

    render() {
        return (
            <div>
                {/* <input type="text" ref={this.inputRef}/> */}
                 <input type="text" ref={this.setCbRef}/>
                <button onClick={this.onClickHandler}>Click me</button>
            </div>
        );
    }
}
export default RefComp;
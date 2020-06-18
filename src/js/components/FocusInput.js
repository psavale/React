import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    console.log(this.componentRef.current)
    this.componentRef.current.focusInput()
    this.componentRef.current.Test()
  }

  render() {
    return (
      <div>
        <h3>This example demonstrates the calling child component method from parent component through ref keyword
          we can do this through call functions as well.
        </h3>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput

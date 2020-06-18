import React, { Component } from 'react';

class Form extends Component {

 constructor(props) {
     super(props)

     this.state={
         userName:'',
         topic:'',
         comment:''
     }
 }
 
 onInputChangeHandler = event =>{
    this.setState({
        userName:event.target.value
    })
 }

 topicChangeHandler=event=>{
     this.setState({
        topic:event.target.value
     })
 }

 commentChangeHandler=event=>{
     this.setState({
         comment:event.target.value
     })
 }

 formSubmitHandler=event=>{
     alert(`${this.state.userName} ${this.state.topic} ${this.state.comment}`);
     event.preventDefault();
 }
    
    render() {
        const {userName, topic, comment}=this.state;
        return (
            <form onSubmit={this.formSubmitHandler}>
                <div>
                    <label>UserName</label>
                    <input type='text' value={userName} onChange={this.onInputChangeHandler} ></input>
                </div>
                <div>
                   <label>Topics</label>
                   <select value={topic} onChange={this.topicChangeHandler}>
                       <option value="react">React</option>
                       <option value="angular">Angular</option>
                       <option value="vue">Vue</option>
                   </select>
                </div>

                <div>
                    <label>Comment</label>
                    <textarea value={comment} onChange={this.commentChangeHandler}></textarea>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

        );
    }
}

export default Form
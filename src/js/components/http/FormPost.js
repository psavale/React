import React, { Component } from 'react';
import Axios from 'axios';

class FormPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            name: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        console.log(e.target.name + " " + e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitHandler = (e) => {
        console.log('submit clicked');
        Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        e.preventDefault();
    }
    render() {

        const { userId, name, body } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <label> UserId </label>
                        <input
                            type="text"
                            name='userId'
                            value={userId}
                            onChange={this.changeHandler}>
                        </input>
                    </div>

                    <div>
                        <label> Name </label>
                        <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={this.changeHandler}>
                        </input>
                    </div>

                    <div>
                        <label> Description </label>
                        <input
                            type="text"
                            name='body'
                            value={body}
                            onChange={this.changeHandler}>
                        </input>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormPost;
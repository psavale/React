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
                    <div className="form-group">
                        <label for="email">Name</label>
                        <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={this.changeHandler}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Email:</label>
                        <input
                            type="text"
                            name='userId'
                            value={userId}
                            onChange={this.changeHandler}>
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Query:</label>
                        <textarea className="form-control" name='body' value={body} onChange={this.changeHandler} rows="2" id="comment" />
                    </div>
                    <button type="submit" class="btn btn-primary" style={{ marginTop: '-19px' }}>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormPost;
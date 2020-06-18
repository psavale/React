import React, { Component } from 'react';

class TodoList extends Component {

    addTask = () => {

    }

    render() {
        return (
            <form onSubmit={this.addTask}>
                <div className="TodoList">
                    <input type="text" placeholder="enter todo task" />
                    <input type="button" text="add" />
                </div>
            </form>
        );
    }
}

export default TodoList;
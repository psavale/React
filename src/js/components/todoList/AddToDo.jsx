import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addToDo } from '../../actions/actions'
import { connect } from 'react-redux';

let input;
let nextTodoId = 0;

class AddToDo extends Component {

    render() {

        return (
            <div>
                <form onSubmit={(e) => {
                    console.log('onsubmit', input.value);
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    this.props.addToDo(nextTodoId++, input.value);
                    input.value = ''
                }}>
                    <input type="text" ref={node1 => input = node1} />
                    <button type="submit">Add ToDo task</button>
                </form>
            </div>
        );
    }
}

const onSubmit = (e) => {
    console.log('onsubmit', input.value);
    e.preventDefault();
    if (!input.value.trim()) {
        return
    }
    addToDo(nextTodoId++, input.value);
    input.value = ''
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addToDo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddToDo);
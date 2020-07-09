import React, { Component } from 'react';
import ToDo from '../todoList/ToDo';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../../actions/actions'
import { VisibilityFilters } from '../../actions/actionTypes'
import { connect } from 'react-redux';

class ToDoList extends Component {
    render() {
        return (
            <ul style={{ listStyle: 'none' }}>
                {this.props.todos.map(todo =>
                    <ToDo
                        key={todo.id}
                        {...todo}
                        onClick={() => this.props.toggleTodo(todo.id)}
                    />
                )}

            </ul>

        );
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//     }).isRequired).isRequired,
//     toggleTodo: PropTypes.func.isRequired
// }

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ toggleTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
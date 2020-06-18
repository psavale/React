import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser } from '../actions/actions'


class UserList extends Component {

    renderList() {

        return this.props.users.map(
            (user) => {
                return (
                    <li key={user.id}
                        onClick={() => this.props.userSelected(user)} >{user.first} {user.last}</li>
                )
            }
        )
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return { users: state.users }
}



// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
// const matchDispatchToProps=(dispatch)=>bindActionCreators({    
//      selectUser     
// }, dispatch);

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ userSelected: selectUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
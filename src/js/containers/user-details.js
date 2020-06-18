import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserDetails extends Component {
    render() {

        if (!this.props.activeUser) {
            return <div>Please select user...</div>
        }
        return (
            <div>
                 <img src={this.props.activeUser.thumbnail} />
                <h2>{this.props.activeUser.first}   {this.props.activeUser.last}</h2>
                <h3>Age : {this.props.activeUser.age}</h3>
                <h3>Description : {this.props.activeUser.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { activeUser: state.activeUser }
}

export default connect(mapStateToProps)(UserDetails);
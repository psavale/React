import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { iceCreamAction } from '../actions/actions';

class IceCream extends Component {
    render() {
        return (
            <Fragment>
                <h5>No of iceCream remaining -{this.props.iceCreamCount}</h5>
                <button onClick={() => this.props.iceCreamAction(1)}>Buy iceCream</button>
            </Fragment>
        );

    }
}
const mapStateToProps = state => {
    return { iceCreamCount: state.iceCream.IceCreamInventory }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ iceCreamAction: iceCreamAction }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(IceCream);
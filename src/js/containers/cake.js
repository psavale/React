import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { cakeAction } from '../actions/actions'

class Cake extends Component {
    render() {
        return (
            <Fragment>

                <h5>No of cakes remaining -{this.props.cake}</h5>
                <button onClick={() => this.props.cakeAction(1)}>Buy Cake</button>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        cake: state.cake.cakeInventory
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ cakeAction: cakeAction }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Cake);
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { cakeAction } from '../actions/actions'
import { PropTypes } from 'prop-types'

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

// Cake.propTypes = {
//     onclick: PropTypes.func
// }

const buyCake = (e) => {
    console.log('cake onclick');
    cakeAction(1);
}

const mapStateToProps = state => {
    return {
        cake: state.cake.cakeInventory
    }
}

// Here's a good use case for bindActionCreators:
// You want a child component to be completely unaware of Redux.
// We create bound versions of these functions now so we can pass them down to our child later.
const matchDispatchToProps = dispatch => {
    return bindActionCreators({ cakeAction }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Cake);
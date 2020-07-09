import React from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { setVisiblityFilter } from '../../actions/actions'
import { connect } from 'react-redux';

const Link = (props) => {
    return (
        <button onClick={() => props.setVisiblityFilter(props.filter)} disabled={props.active} style={{ marginLeft: '4px' }}>{props.children}</button>
    );
}

// Link.propTypes = {
//     active: PropTypes.bool.isRequired,
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func.isRequired
// }

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setVisiblityFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)
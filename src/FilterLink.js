
import React from 'react';
import { Link } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
    <Link
        to={filter === 'all' ? '' : filter}
        activestyle={{
            textDecoration : 'none',
            color : 'black'
        }}
    >
        {children}
    </Link>
);

export default FilterLink;


// import {connect} from "react-redux";
// import {setVisibilityFilter} from "./TodoAppAction";
// import Link from './Link';
//
// export default connect(
//     // mapStateToProps
//     (state, ownProps) => ({active : ownProps.filter === state.visibilityFilter}),
//     // mapDispatchToProps
//     (dispatch, ownProps) => ({onClick : () => dispatch(setVisibilityFilter(ownProps.filter))})
// )(Link);
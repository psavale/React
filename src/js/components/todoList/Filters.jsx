import React, { Component } from 'react';
import Link from '../todoList/Link'
import { VisibilityFilters } from '../../actions/actionTypes'

export const Filters = () => {
    return (
        <div>
            <span>Show: </span>
            <Link filter={VisibilityFilters.SHOW_ALL}> All  </Link>
            <Link filter={VisibilityFilters.SHOW_ACTIVE}> Active </Link>
            <Link filter={VisibilityFilters.SHOW_COMPLETED}> Completed </Link>
        </div>
    );

}

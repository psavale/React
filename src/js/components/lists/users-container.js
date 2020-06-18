import React from 'react';
import UserList from '../../containers/user-list';
import UserDetails from '../../containers/user-details';

const UsersContainer = () => {
    return (
        <div>
            <h2>User List</h2>
            <UserList/>
            <h2>User Details</h2>
            <UserDetails/>
        </div>
    );
};

export default UsersContainer;
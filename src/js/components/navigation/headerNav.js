import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home } from '../home/home.content';
import UsersContainer from '../lists/users-container';
import { sizeHeight } from '@material-ui/system';
import SignUp from '../signup/signup.component';
import List from '../lists/list.content';

function HeaderNav() {

    let user = {
        name: "psavale",
        age: 29,
        initial: "Param"
    }

    const [initial, changeInitial] = useState(user.initial);
    const [greeting, changeGreeting] = useState("Welcome");

    return (
        <Router>
            <div className="topnav">
                <Link to="/" exact >Home</Link>
                <Link to="/userlist" >Users</Link>
                <Link to="/list" >List</Link>

                <div className="topnav-right">
                    <Link to="/signup">SignUp</Link>
                    <span className="wlcMsg"> {greeting} {initial} !</span>
                </div>

            </div>

            <Route path="/" component={Home} exact />
            <Route path="/userlist" component={UsersContainer} />
            <Route path="/signup" component={SignUp} />
            <Route path="/list" component={List} />
        </Router>
    );

}

export default HeaderNav;
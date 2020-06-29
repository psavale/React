import React, { useState, div } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home } from '../home/home.content';
import UsersContainer from '../lists/users-container';
import { sizeHeight } from '@material-ui/system';
import SignUp from '../signup/signup.component';
import List from '../lists/list.content';
import '../../../styles/HeaderNav.scss';
import HookExamples from '../hooks/hook-examples';
import HocExample2 from '../hoc/example2';
import { Switch } from '@material-ui/core';
import { NavBar } from './navbar';

export const Header = () => {

    let user = {
        name: "psavale",
        age: 29,
        initial: "Param"
    }

    const [initial, changeInitial] = useState(user.initial);
    const [greeting, changeGreeting] = useState("Welcome");

    return (
        <div>
            <NavBar />
            <div className="topnav-right">
                <Link to="/signup">SignUp</Link>
                <span className="wlcMsg"> {greeting} {initial} !</span>
            </div>
        </div>
    );
}

const RenderRoutes = () => {
    return (
        <Switch>
            <Route path="/Home" component={Home} exact />
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>
            <Route path="/userlist" component={UsersContainer} />
            <Route path="/signup" component={SignUp} />
            <Route path="/list" component={List} />
            <Route path="/HookExamples" component={HookExamples} />
            <Route path="/hocExample2" component={HocExample2} />
        </Switch>
    );
};
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home } from '../home/home.content';
import UsersContainer from '../lists/users-container';
import { sizeHeight } from '@material-ui/system';
import SignUp from '../signup/signup.component';
import List from '../lists/list.content';
import HookExamples from '../hooks/hook-examples'
import '../../../styles/HeaderNav.scss'

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
            {/* <div className="navbar topnav">
                <Link to="/" exact >Home</Link>
                <Link to="/userlist" >Users</Link>
                <Link to="/list" >List</Link>

                <div className="dropdown">
                    <button className="dropbtn">Features
                            <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/HookExamples" >Hook (useState)</Link>
                        <Link to="/userlist" >Users</Link>
                        <Link to="/list" >List</Link>
                    </div>
                </div>
                <div className="topnav-right">
                    <Link to="/signup">SignUp</Link>
                    <span className="wlcMsg"> {greeting} {initial} !</span>
                </div>
            </div> */}

            <div>
                <ul className="nav nav-pills topnav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li className="dropdown">
                        <Link to="/userlist" >Users</Link>
                    </li>
                    <li className="dropdown">
                        <Link to="/list" >List</Link>
                    </li>
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className="dropdown-toggle">Features <b className="caret"></b></a>
                        <ul className="dropdown-menu" id="menu1">
                            <li>
                                <Link to="/HookExamples" >Hooks <i className="icon-arrow-right"></i></Link>
                                <ul className="dropdown-menu sub-menu">
                                    <li><a href="#">useState</a></li>
                                    <li><a href="#">useEffects action</a></li>
                                    <li><a href="#">useContext</a></li>
                                    {/* <li className="divider"></li>
                                <li className="nav-header">Nav header</li>
                                <li><a href="#">Separated link</a></li> */}
                                </ul>
                            </li>
                            <li><a href="#">Another feature</a></li>
                            {/* <li><a href="#">Something else here</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Separated link</a></li> */}
                        </ul>
                    </li>
                </ul>

                <div className="topnav-right">
                    <Link to="/signup">SignUp</Link>
                    <span className="wlcMsg"> {greeting} {initial} !</span>
                </div>
            </div>

            <Route path="/" component={Home} exact />
            <Route path="/userlist" component={UsersContainer} />
            <Route path="/signup" component={SignUp} />
            <Route path="/list" component={List} />
            <Route path="/HookExamples" component={HookExamples} />

        </Router>
    );
}
export default HeaderNav;
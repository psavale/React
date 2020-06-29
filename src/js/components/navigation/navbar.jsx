import React from 'react';
import { Link } from 'react-router-dom'

export const NavBar = (props) => {
    return (
        <div>
            <ul className="nav nav-pills topnav">
                <li className="active"><Link to="/Home">Home</Link></li>
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
                        <li> <Link to="/hocExample2">Hoc example2</Link></li>
                        {/* <li><a href="#">Something else here</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Separated link</a></li> */}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Nav () {
        return (
            <div>
                <ul id="myNavBar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact Me</Link>
                    </li>
                </ul>







            </div>
        )
    }


export default Nav
/**
 * Main menu component
 */
// imports
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MenuComponent extends React.Component {
    
    constructor( props ) {
        super(props);
    }
    
    render() {
        return (
            <nav className="app-menu">
                <ul className="main-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/kanban">Kanban</Link></li>
                </ul>
            </nav>
        );
    }
}

export default MenuComponent
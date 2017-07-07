/**
 * Main menu component
 */
// imports
import React from 'react';

class MenuComponent extends React.Component {
    
    constructor( props ) {
        super(props);
    }
    
    render() {
        return (
            <nav className="app-menu">
                <ul className="main-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        );
    }
}

export default MenuComponent
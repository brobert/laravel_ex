import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';
import BoardComponent from './components/kanban/board';
import MenuComponent from './components/menu';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <MenuComponent />
                <BoardComponent />
            </div>
        );
    }
}

render(<Hello />, document.getElementById('root'));
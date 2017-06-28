import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';
import BoardComponent from './components/kanban/board';

class Hello extends React.Component {
    render() {
        return (
            <BoardComponent />
        );
    }
}

render(<Hello />, document.getElementById('root'));
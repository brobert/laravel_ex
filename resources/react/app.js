import React, { Component } from 'react';
import {render} from 'react-dom';

import MenuComponent from './components/menu';
import HomeSite from './sites/home';
import KanbanSite from './sites/kanban';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
    render() {
    	
        return (
			<Router>
			    <div className="">
			    	<MenuComponent />
			    	<Route exact path="/" component={HomeSite} />
			    	<Route path="/kanban" component={KanbanSite} />
			    </div>
			</Router>
		);
    }
}

render(<App />, document.getElementById('root'));
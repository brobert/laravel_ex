/**
 * 
 */
import React, { Component } from 'react';
import BoardComponent from './../components/kanban/board';

class KanbanSite extends Component {
	
	constructor( props ) {
		super( props );
	}
	
	render() {
		return <BoardComponent />
	}
}

export default KanbanSite;
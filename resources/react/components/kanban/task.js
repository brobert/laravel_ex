import React from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import axios from 'axios';

class TaskComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            showDetails: false,
            ready: true,
        };
        
        this.refreshTaskList		= this.props.refreshTaskList.bind(this);
        this.toggleDetails 			= this.toggleDetails.bind(this);
        this.ddChangeOptionHandler 	= this.ddChangeOptionHandler.bind(this);
        this.setReady				= this.setReady.bind(this);
        
        this.statuses = [ 'todo', 'in-progress', 'ready', 'done' ];
        
        this.ready = true;
    }

    setReady() {
    	this.setState( { ready: true } );
    }
    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails,
        });
    }
    
    ddChangeOptionHandler(status) {
    	const setReady = () => {
    		this.setReady();
    	}
    	
    	const refreshList = () => {
    		this.refreshTaskList()
    	}
    	
    	this.setState( { ready: false } );
    	const taskId = this.props.task.id;
        axios.put(
    		`/api/task/${taskId}`,
    		{
    			status
    		}
        )
        .then(function (response) {
            setReady();
            refreshList();
        })
        .catch(function (error) {
            console.info('ERR', error);
            setReady();
        });
    }


    render() {
        const task = this.props.task;
        
        let detailClass = this.state.showDetails? 'up': 'down';
        let componentCssClass = this.state.ready?"ready": "";
        return (
            <div className={`task-component well ${componentCssClass}`}>
            	<div className="task-preloader"/>
                <span className="task-title">{task.name}</span>
                <span 
                	className={`details-toggler glyphicon glyphicon-chevron-${detailClass}`}
                	onClick={this.toggleDetails}
                />

                { 
                    this.state.showDetails
                    ? (
                        <div className="detail-section">
                            {   task.description
                                ?(<div className="">{task.description}</div>)
                                : null
                            }
        	                <DropdownButton 
        	                	title={task.status} 
    	                		id="bg-nested-dropdown"
	                			onSelect={this.ddChangeOptionHandler}
	        	                noCaret
                			>
        	                	{
        	                		this.statuses.map(
    	                				(statusName) => {
    	                					return statusName !== task.status
    	                					? 
                							<MenuItem 
	                							key={statusName} 
	                							eventKey={statusName}
	                						>
	                							{statusName}
                							</MenuItem>
    	                					: null
    	                				}
	                				)
        	                	}
        	                </DropdownButton>
                        </div>
                    )
                    : null
                }
            </div>
        );
    }
}

export default TaskComponent;
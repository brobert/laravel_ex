import React from 'react';
import TaskComponent from './task';

class ListComponent extends React.Component {

    constructor(props) {
        super(props);
        
        this.refreshTaskList = this.props.refreshTaskList.bind(this);
    }

    render() {
        
        let tasks = this.props.tasks.map( (task) => {
            return (
                <TaskComponent
                    key={task.id}
                    task={task}
                	refreshTaskList={this.refreshTaskList}
                />
            );
        })
        return (
            <div className="list-type-column">
                <h4 className="list-type-title">{this.props.name} [{this.props.tasks.length} / {this.props.taskCountAll}]</h4>
                <div className="">
                    {tasks}
                </div>
            </div>
        );
    }

}

export default ListComponent;
import React from 'react';
import TaskComponent from './task';

class BoardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        let tasks = this.props.tasks.map( (task) => {
            console.info('----- TASK')
            return (
                <TaskComponent
                    key={task.id}
                    task={task}
                />
            );
        })
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.name} [{this.props.tasks.length} / {this.props.taskCountAll}]</div>
                <div className="panel-body">
                    {tasks}
                </div>
            </div>
        );
    }

}

export default BoardComponent;
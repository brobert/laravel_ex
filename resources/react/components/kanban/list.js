import React from 'react';
import TaskComponent from './task';

class ListComponent extends React.Component {

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
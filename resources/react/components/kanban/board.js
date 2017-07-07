import React from 'react';
import axios from 'axios';
import _ from 'underscore';

import List from './list';

class BoardComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskTypes: []
        };
    
        this.loadTaskList();
    }
  
    loadTaskList() {
      
        let setData = (tasks) => {
            this.setState(
                {
                    tasks,
                    taskTypes: _.unique(_.pluck(tasks, 'status')),
                }
            );
        }
        
        axios.get('/api/tasks')
        .then(function (response) {
            setData(response.data);
        })
        .catch(function (error) {
            console.info('ERR', error);
        });
    }

    render() {
    
        console.info('this.state.taskTypes', this.state.taskTypes);
        const taskLists = this.state.taskTypes.map(
            ( taskType ) => {
                return (
                    <li 
                        className='board-culumn-type'
                        key={taskType}
                    >
                        <List 
                            tasks={this.state.tasks.filter( ( task ) => { return task.status === taskType; } ) }
                            taskCountAll={this.state.tasks.length}
                            name={taskType}
                            key={taskType}
                        />
                    </li>
                );
            }
        );
        
        console.info(taskLists);
        return (
            <div className="board-component">
                <ul className="board-type-list">
                    {taskLists}
                </ul>
            </div>
        );
    }

}

export default BoardComponent;
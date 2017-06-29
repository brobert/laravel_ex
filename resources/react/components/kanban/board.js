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
                    <div 
                        className='col-md-1'
                        key={taskType}
                    >
                        <List 
                            tasks={this.state.tasks.filter( ( task ) => { return task.status === taskType; } ) }
                            taskCountAll={this.state.tasks.length}
                            name={taskType}
                            key={taskType}
                        />
                    </div>
                );
            }
        );
        
        console.info(taskLists);
        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        Tasks : <span>{this.state.tasks.length}</span>
                    </div>
                </div>
                <div className='row'>
                    {taskLists}
                </div>
            </div>
        );
    }

}

export default BoardComponent;
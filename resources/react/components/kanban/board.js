import React from 'react';
import axios from 'axios';
import _ from 'underscore';
import {Modal, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

import List from './list';
import KanbanHeader from './header';
import CreateModal from './create_modal';

class BoardComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            tasks: [],
            taskTypes: [ 'todo', 'in-progress', 'ready', 'done' ],
            modal: false,
        };
        this.loadTaskList        = this.loadTaskList.bind(this);
        this.createModalHandler  = this.createModalHandler.bind(this);
        this.close               = this.close.bind(this);
        this.open                = this.open.bind(this);
        this.saveTask           = this.saveTask.bind(this);


        
        this.loadTaskList();
    }

    

      
    loadTaskList() {
      
        let setData = (tasks) => {
            this.setState(
                {
                    tasks,
                }
            );
        }
        
        axios.get('/api/task')
        .then(function (response) {
            setData(response.data);
        })
        .catch(function (error) {
            console.info('ERR', error);
        });
    };
    
    saveTask(taskData) {

        const closeModal = () => {
            this.close()
        }
        
        const refreshTaskList = () => {
            console.info('---------------------------------', this)
            this.loadTaskList();
        }
        
        axios.post('/api/task', taskData)
        .then(function (response) {
            closeModal();
            console.info('---------------------------------', this);
            refreshTaskList();
        })
        .catch(function (error) {
            console.info('ERR', error);
            closeModal();
        });
    }

    close() {
        this.setState({ modal: false });
    };

    open() {
        this.setState({ modal: true });
    };
      
    createModalHandler() {
        this.setState({modal: true})
    };
    
    render() {
        
        const modalInstance = (
            <CreateModal 
                {...this.state}
                saveTask={this.saveTask}
                close={this.close}
            />
        );
        
        const taskLists = this.state.taskTypes.map(
            ( taskType ) => {
                return (
                    <li 
                        className='board-culumn-type'
                        key={taskType}
                        data-type={taskType}
                    >
                        <List 
                            tasks={this.state.tasks.filter( ( task ) => { return task.status === taskType; } ) }
                            taskCountAll={this.state.tasks.length}
                            refreshTaskList={this.loadTaskList}
                            name={taskType}
                            key={taskType}
                        />
                    </li>
                );
            }
        );
        
        return (
            <div className="board-component">
                <KanbanHeader 
                    createModalHandler={this.createModalHandler}
                />
                <ul className="board-type-list">
                    {taskLists}
                </ul>
                { this.state.modal ? modalInstance : null }
            </div>
        );
    }

}

export default BoardComponent;
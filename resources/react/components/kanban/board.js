import React from 'react';
import axios from 'axios';
import _ from 'underscore';
import {Modal, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

import List from './list';
import KanbanHeader from './header';

class BoardComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            taskName: '',
            taskDesc: null,
            tasks: [],
            taskTypes: [ 'todo', 'in-progress', 'ready', 'done' ],
            modal: false,
        };
        this.loadTaskList        = this.loadTaskList.bind(this);
        this.createModalHandler  = this.createModalHandler.bind(this);
        this.close               = this.close.bind(this);
        this.open                = this.open.bind(this);
        this.getValidationState  = this.getValidationState.bind(this);
        this.handleChange        = this.handleChange.bind(this);
        this.handleChangeName    = this.handleChangeName.bind(this);
        this.handleChangeDesc    = this.handleChangeDesc.bind(this);
        this.createTask          = this.createTask.bind(this);
        
        this.loadTaskList();
    }
  
    getValidationState() {
        const length = this.state.taskName.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    }
    
    handleChangeName(e) {
        this.handleChange(e, 'taskName');
    }
    
    handleChangeDesc(e) {
        this.handleChange(e, 'taskDesc');
    }
    
    handleChange(e, key) {
        let nextState = {};
        nextState[key] = e.target.value
        this.setState(nextState);
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
    
    createTask() {
        const taskData = {
            name: this.state.taskName,
            description: this.state.taskDesc,
        }
        
        const closeModal = () => {
            this.close()
        }
        
        const refreshTaskList = () => {
            this.loadTaskList();
        }
        
        axios.post('/api/task', taskData)
        .then(function (response) {
            closeModal();
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
            <Modal show={this.state.modal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Create a new task</h4>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >
                            <ControlLabel>Working example with validation</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter text"
                                onChange={this.handleChangeName}
                            />
                            
                            <FormControl.Feedback />
                            <HelpBlock>Validation is based on string length.</HelpBlock>
                        </FormGroup>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Textarea</ControlLabel>
                            <FormControl 
                                componentClass="textarea" 
                                placeholder="description" 
                                onChange={this.handleChangeDesc} 
                            />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.createTask} bsStyle="info">Create</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
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
                { this.state.modal ? (modalInstance): null }
            </div>
        );
    }

}

export default BoardComponent;
/**
 * 
 */
import React from 'react';
import axios from 'axios';
import _ from 'underscore';
import {Modal, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';


class CreateModalComponent extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            taskName: '',
            taskDesc: null,
            tasks: [],
            modal: false,
        };
        
        this.getValidationState  = this.getValidationState.bind(this);
        this.handleChange        = this.handleChange.bind(this);
        this.handleChangeName    = this.handleChangeName.bind(this);
        this.handleChangeDesc    = this.handleChangeDesc.bind(this);
        this.createTask          = this.createTask.bind(this);
        this.closeModal          = this.closeModal.bind(this);
    }

    getValidationState() {
        const length = this.state.taskName.length;
        if (length > 5) return 'success';
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
    
    closeModal() {
        this.props.closeModal();
    }
    
    createTask() {
        
        this.props.saveTask({
            name: this.state.taskName,
            description: this.state.taskDesc,
        });
    }
    render() {
        
        console.info('MODAL::PROPS: ', this.props )
        
        return (
            <Modal show={this.props.modal} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj zadanie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >
                            <ControlLabel>Nazwa zadania</ControlLabel>
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
                            <ControlLabel>Krótki opis zadania</ControlLabel>
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
                    <Button onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CreateModalComponent;
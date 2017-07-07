import React from 'react';

class TaskComponent extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            showDetails: false,
        };
        
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails() {
        console.info('toggle show details');
        this.setState({
            showDetails: !this.state.showDetails,
        });
    }


    render() {
        const task = this.props.task;
        return (
            <div className="task-component well">
                <h5 className="task-title" onClick={this.toggleDetails}>{task.name}</h5>
                { 
                    this.state.showDetails
                    ? (
                        <div className="">
                            {   task.description
                                ?(<div className="">{task.description}</div>)
                                : null
                            }
                        </div>
                    )
                    : null
                }
            </div>
        );
    }

}

export default TaskComponent;
import React from 'react';

class TaskComponent extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
      console.info();
      const task = this.props.task;
    return (
        <div className="panel panel-default">
            <div className="panel-heading">{task.name}</div>
            <div className="panel-body">
                {   task.description
                    ?(<div className="well">{task.description}</div>)
                    : null
                }
            </div>
        </div>
    );
  }

}

export default TaskComponent;
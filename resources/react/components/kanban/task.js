import React from 'react';

class TaskComponent extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
      console.info();
      const task = this.props.task;
    return (
        <div className="task-component well">
            <h5 className="task-title">{task.name}</h5>
            <div className="">
                {   task.description
                    ?(<div className="">{task.description}</div>)
                    : null
                }
            </div>
        </div>
    );
  }

}

export default TaskComponent;
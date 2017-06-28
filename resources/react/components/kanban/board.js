import React from 'react';
import axios from 'axios';

import List from './list';

class BoardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        tasks: [],
    };
    
    this.loadTaskList();
  }
  
  loadTaskList() {
      
      let setData = (data) => {
          this.setState({tasks: data});
      }
      axios.get('/api/tasks')
      .then(function (response) {
        console.info('OK',this,response);
        setData(response.data);
      })
      .catch(function (error) {
        console.info('ERR', error);
      });
  }

  render() {
    return (
        <div>
            <div className='row'>
                <div className='col-md-12'>
                    Tasks : <span>{this.state.tasks.length}</span>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <List 
                        tasks={this.state.tasks.filter( ( task ) => { return task.status === 'todo'; } ) }
                        name='todo'
                        key='todo'
                    />
                </div>
                <div className='col-md-4'>
                    <List 
                        tasks={this.state.tasks.filter( ( task ) => { return task.status === 'in_progress'; } ) }
                        name='in_progress'
                        key='in_progress'
                    />
                </div>
                <div className='col-md-4'>
                    <List 
                        tasks={this.state.tasks.filter( ( task ) => { return task.status === 'done'; } ) }
                        name='done'
                        ksy='done'
                    />
                </div>
            </div>
        </div>
    );
  }

}

export default BoardComponent;
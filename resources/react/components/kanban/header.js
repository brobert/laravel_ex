/**
 * 
 */
import React from 'react';
import {Button} from 'react-bootstrap';

class KanbanHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="kanban-header row">
                <div className="col-md-1 col-xs-4 pull-right">
                    <Button
                        block
                        bsStyle="primary"
                        onClick={()=>{console.info('clickHandler::CREATE'); this.props.createModalHandler();}}
                    >
                        Create
                    </Button>
                </div>
            </div>
        );
    }
}

export default KanbanHeader;
/**
 * Strona prezentująca grafik zajęć z podziałem na dzieci lub nauczycieli
 */
import React, { Component } from 'react';

import Header from './../components/diagram/header';
import { Tabs, Tab } from 'react-bootstrap';

class DiagramSite extends Component {
    
    constructor( props ) {
        super( props );
    }
    
    render() {
        return (
            <div className="diagram-site">
                <Header/>
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" className="diagram-tabs">
                    <Tab eventKey={1} title="Nauczyciele">Tab 1 content</Tab>
                    <Tab eventKey={2} title="Dzieci">Tab 2 content</Tab>
                    <Tab eventKey={3} title="Pokoje">Tab 3 content</Tab>
                </Tabs>
            </div>
        );
    }
}

export default DiagramSite;
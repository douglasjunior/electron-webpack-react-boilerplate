import React, { Component } from 'react';

import { Card, Row, Col } from 'antd';

import './HomePage.scss';
import LineChart from '../components/LineChart';
import VelocChart from '../components/VelocChart';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Row className="home-page-tile-row">
                    <Col md={8} className="home-page-tile-card">
                        <Card>
                            <VelocChart value={2.6} />
                        </Card>
                    </Col>
                    <Col md={8} className="home-page-tile-card">
                        <Card>
                            <VelocChart value={3.2} />
                        </Card>
                    </Col>
                    <Col md={8} className="home-page-tile-card">
                        <Card>
                            <VelocChart value={7.9} />
                        </Card>
                    </Col>
                </Row>
                <Card>
                    <LineChart />
                </Card>
            </div>
        );
    }

}

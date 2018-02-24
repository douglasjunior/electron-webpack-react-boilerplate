import React, { Component } from 'react';

import { Card, Row, Col } from 'antd';

import './HomePage.scss';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Row className="home-page-tile-row">
                    <Col xl={6} lg={12} className="home-page-tile-card">
                        <Card>
                            <PieChart />
                        </Card>
                    </Col>
                    <Col xl={6} lg={12} className="home-page-tile-card">
                        <Card>
                            <PieChart />
                        </Card>
                    </Col>
                    <Col xl={6} lg={12} className="home-page-tile-card">
                        <Card>
                            <PieChart />
                        </Card>
                    </Col>
                    <Col xl={6} lg={12} className="home-page-tile-card">
                        <Card>
                            <PieChart />
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

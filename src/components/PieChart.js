import React, { Component } from 'react';

import {
    PieChart as PC, Pie,
    ResponsiveContainer, Cell,
} from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class PieChart extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <ResponsiveContainer height={100} width="100%">
                <PC onMouseEnter={this.onPieEnter}>
                    <Pie
                        dataKey="value"
                        data={data}
                        cx="50%"
                        cy={80}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                    >
                        {
                            data.map((entry, index) => (
                                <Cell key={entry} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                </PC>
            </ResponsiveContainer>
        );
    }

}

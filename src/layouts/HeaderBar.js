import React, { Component } from 'react';

import { Layout, Icon } from 'antd';

import styles from './HeaderBar.scss';

const { Header } = Layout;

export default class HeaderBar extends Component {

    state = {}

    render() {
        return (
            <Header className={styles.bar}>

                <Icon type="user" />

                <span style={{ marginLeft: 8 }}>
                    My Project
                </span>

            </Header>
        );
    }

}

import React, { Component } from 'react';

import { Layout } from 'antd';

import styles from './MainLayout.scss';
import HeaderBar from './HeaderBar';
import ContentRoutes from './ContentRoutes';
import SideMenu from './SideMenu';

export default class MainLayout extends Component {

    state = {}

    render() {
        return (
            <Layout className={styles.layout}>
                <SideMenu />
                <Layout>
                    <HeaderBar />
                    <ContentRoutes />
                </Layout>
            </Layout>
        );
    }

}

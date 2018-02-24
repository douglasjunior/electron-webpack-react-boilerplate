import React, { Component } from 'react';

import { Layout } from 'antd';

import HeaderBar from './HeaderBar';
import ContentRoutes from './ContentRoutes';
import './MainLayout.scss';
import SideMenu from './SideMenu';

export default class MainLayout extends Component {

    state = {}

    render() {
        return (
            <Layout className="main-layout">
                <SideMenu />
                <Layout>
                    <HeaderBar />
                    <ContentRoutes />
                </Layout>
            </Layout>
        );
    }

}

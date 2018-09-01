import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import styles from './SideMenu.scss';
import { ROUTES_ITEMS } from './ContentRoutes';

const { Sider } = Layout;

class SideMenu extends Component {

    state = {
        collapsed: false,
    };

    _onCollapse = (collapsed, type) => {
        this.setState({ collapsed });
    }

    render() {
        const { collapsed } = this.state;
        const { location } = this.props;

        const menuItems = ROUTES_ITEMS.map(item => (
            <Menu.Item key={item.to}>
                <Link to={item.to}>
                    <Icon type={item.icon} />
                    <span className="nav-text">
                        {item.text}
                    </span>
                </Link>
            </Menu.Item>
        ));

        return (
            <Sider
                breakpoint="md"
                collapsedWidth="0"
                onCollapse={this._onCollapse}
                collapsed={collapsed}
            >

                <div className={styles.logo}>
                    <h1>
                        <Link to="/">Project</Link>
                    </h1>
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    defaultSelectedKeys={['/']}
                >

                    {menuItems}

                </Menu>

            </Sider>
        );
    }

}

PropTypes.toString();

SideMenu.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
};

export default withRouter(SideMenu);

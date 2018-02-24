import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { LocaleProvider } from 'antd';
import ptBR from 'antd/lib/locale-provider/pt_BR';

import './values/theme.less';
import App from './App';

window.Promise = require('bluebird');
window.axios = require('axios').default;
window.moment = require('moment-timezone');
require('moment/locale/pt-br');

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <LocaleProvider locale={ptBR}>
                <HashRouter>
                    <Component />
                </HashRouter>
            </LocaleProvider>
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept(() => {
        render(App);
    });
}

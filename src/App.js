import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore.js';

import { AppView } from './views/AppView.js';
const store = configureStore();

ReactDOM.render(
        <Provider store={ store }>
            <AppView />
        </Provider>,
        window.document.getElementById('container')
    );

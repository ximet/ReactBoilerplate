import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { testViewSelector } from '../selectors/testViewSelector.js';
import { testViewActions } from '../actions/testViewActions.js';
import * as views from './index.js';


export const AppView = connect(testViewSelector, testViewActions)((props) => {

    return <div>
        {
            `${props.hello}!!!`
        }
    </div>
});

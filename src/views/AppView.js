import React from 'react';
import { connect } from 'react-redux';
import { appViewSelector } from '../selectors/appViewSelector.js';
import { appViewActions } from '../actions/appViewActions.js';


export const AppView = connect(appViewSelector, appViewActions)((props) => {
    return <div>
        {
            'Text'
        }
    </div>
});

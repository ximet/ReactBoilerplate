import React from 'react';
import { connect } from 'react-redux';
import { testViewSelector } from '../selectors/testViewSelector.js';
import { testViewActions, GO_TO_MAIN_PAGE } from '../actions/testViewActions.js';

export const TestView = connect(testViewSelector, testViewActions)((props) => {

    return <div>
        {`${props.hello}!!!`}

        <div onClick={props[GO_TO_MAIN_PAGE]}>Go to main page</div>
    </div>
});

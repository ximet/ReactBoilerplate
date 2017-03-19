import Immutable from 'immutable';
import { SET_ACTIVE_VIEW, GO_TO_BACK } from '../actions/appViewActions.js';
import { initialState } from '../initials/appViewInitialState.js';

export default function appViewReducer (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_VIEW: {
            const { activeViewName, isGoToBack, isClearHistory } = action.values;

            return state.update('history', (history) => {
                const stack = isClearHistory ? new Immutable.Stack() : history;

                return stack.push({
                    viewName: activeViewName,
                    isGoToBack
                })
            });
        }

        default: {
            return state;
        }
    }
}

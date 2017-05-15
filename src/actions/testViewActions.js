import { appViewActions, SET_ACTIVE_VIEW } from '../actions/appViewActions.js';
const prefixActions = 'TEST_VIEW_';
export const GO_TO_MAIN_PAGE = `${prefixActions}GO_TO_MAIN_PAGE`;

export const testViewActions = {
    [ GO_TO_MAIN_PAGE ]: () =>
        (dispatch, getState) => {
            dispatch(appViewActions[ SET_ACTIVE_VIEW ]('MainView'));
        },
};

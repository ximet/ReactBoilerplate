const prefixActions = 'APP_VIEW_';

export const SET_ACTIVE_VIEW = `${prefixActions}SET_ACTIVE_VIEW`;
export const GO_TO_BACK = `${prefixActions}GO_TO_BACK`;
export const SET_ACTIVE_LANGUAGE = `${prefixActions}SET_ACTIVE_LANGUAGE`;

export const appViewActions = {
    [ SET_ACTIVE_VIEW ]: (viewName) => ({
        type: SET_ACTIVE_VIEW,
        values: {
            activeViewName: viewName
        }
    })
};

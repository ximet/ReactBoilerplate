import { createSelector } from 'reselect';



export const appViewSelector = createSelector(
    [

    ],
    (  ) => {
        return {
            activeViewName: "activeView.viewName"
        };
    }
);

import { useEffect, useReducer } from 'react';

const initialState = {
    token: null,
    organisation: null,
    users: [],
    teams: [],
    repositories: [],
    filters: [],
    daysBeforeWarning: '1',
    daysBeforeCritical: '2',
    hoursUntilNotNew: '2',
    autoScroll: 'false',
    cdoRotation: [],
    minNbReviews: 2,
    onlyNotReviewed: 'true',
};

function reducer(state, action) {
    switch (action.type) {
        case 'update':
            if (!state.hasOwnProperty(action.key)) {
                return state;
            }
            return {
                ...state,
                [action.key]: action.value
            };
        default:
            throw new Error();
    }
}

export const useSettings = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        urlParams.forEach((value, key) =>
            dispatch({
                type: 'update',
                key,
                value: Array.isArray(state[key]) ? value.split(',') : value
            })
        );

        // if (process.env.NODE_ENV !== 'development') {
        //     window.history.replaceState({}, document.title, window.location.pathname);
        // }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return state;
};

import { useEffect, useReducer } from 'react';
import * as url from "url";

const initialState = {
    token: null,
    organisation: null,
    repositories: [],
    filteredTags: [],
    requiredTags: [],
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
            return {
                ...state,
                ...action.settings,
            };
        default:
            throw new Error();
    }
}

export const useSettings = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const settings = {};
        for (const [key, value] of urlParams.entries()) {
           settings[key] = Array.isArray(initialState[key]) ? value.split(',') : value;
        }
        dispatch({
            type: 'update',
            settings,
        })
    }, []);

    return state;
};

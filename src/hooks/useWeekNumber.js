import { useMemo } from 'react';
import moment from 'moment';

export const useWeekNumber = () => {
    return useMemo(() => {
        const now = moment();
        return now.week();
    }, []);
};

import { useMemo } from 'react';
import moment from 'moment';

export const useTimeAgo = (time, settings) => {
    return useMemo(() => {
        let timeState = 'NEUTRAL';
        const timeMoment = moment(time);
        const timeAgoText = timeMoment.fromNow();
        const now = moment();
        const newTime = moment().subtract(+settings.hoursUntilNotNew, 'hours');
        if (timeMoment.isBetween(newTime, now)) {
            timeState = 'NEW';
        } else {
            let nbDays = now.diff(timeMoment, 'days');
            // if currently in weekend and full day has passed, skip from counter
            if ((now.day() === 0 || now.day() === 6) &&
                (now.hours() > timeMoment.hours() ||
                    (now.hours() === timeMoment.hours() && now.minutes() > timeMoment.minutes())
                )
            ) {
                nbDays--;
            }
            now.subtract(1, 'days');
            while (now.diff(timeMoment, 'days') > 0) {
                // if weekend, skip from counter
                if (now.day() === 0 || now.day() === 6) {
                    nbDays--;
                }
                now.subtract(1, 'days');
            }
            if (nbDays >= +settings.daysBeforeCritical) {
                timeState = 'CRITICAL';
            } else if (nbDays >= +settings.daysBeforeWarning) {
                timeState = 'WARNING';
            }
        }

        return {
            timeAgoText,
            timeState
        };
    }, [time, settings.hoursUntilNotNew, settings.daysBeforeWarning, settings.daysBeforeCritical]);
};

import { useMemo } from 'react';

export const useShareLink = (settings) => {
    return useMemo(() => {
        const url = new URL(`${window.location.origin}${window.location.pathname}`);
        const settingsKeys = Object.keys(settings);
        for (const key of settingsKeys) {
            if (key !== 'token') {
                url.searchParams.set(key, Array.isArray(settings[key]) ? settings[key].join(',') : settings[key]);
            }
        }
        return url.toString();
    }, [settings]);
};

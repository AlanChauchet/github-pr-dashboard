import {useEffect, useState} from "react";

export const useMe = (api) => {
    const [me, setMe] = useState({ id: null, login: null, avatarUrl: null });

    useEffect(() => {
        if (api) {
            api.getMe().then(setMe).catch((err) => console.error('getMe failed', err));
        }
    }, [api]);

    return me;
};

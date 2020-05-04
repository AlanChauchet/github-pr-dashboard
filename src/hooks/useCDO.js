import { useEffect, useState } from 'react';
import moment from 'moment';

export const useCDO = (api, settings) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const weekOfYear = moment().week();
            const username = settings.cdoRotation[weekOfYear % settings.cdoRotation.length];
            const user = await api.getUser(username);
            setUser(user);
        }
        if (api && settings.cdoRotation.length) {
            fetchData()
                .catch(console.error);
        }
    }, [api, settings.cdoRotation]);

    return user;
};

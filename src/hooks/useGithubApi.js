import { useEffect, useState } from 'react';
import GithubApi from '../api/github';

export const useGithubApi = (token, organisation) => {
    const [api, setApi] = useState(null);

    useEffect(() => {
        if (token && organisation) {
            setApi(new GithubApi({ token, org: organisation }));
        } else {
            setApi(null);
        }
    }, [token, organisation]);

    return api;
};

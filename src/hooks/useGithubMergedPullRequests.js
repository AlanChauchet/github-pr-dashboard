import { useEffect, useState } from 'react';

export const useGithubMergedPullRequests = (api, { repositories, users, filters }) => {
    const [nbClosed, setNbClosed] = useState(0);

    useEffect(() => {
        async function fetchData() {
            let pullRequests = [];
            for (const repository of repositories) {
                const closedPRs = await api.getClosedPrsLastWeek(repository);
                pullRequests = [
                    ...pullRequests,
                    ...closedPRs
                ];
            }
            pullRequests = pullRequests.filter(pr => pr.merged_at);
            setNbClosed(pullRequests.length);
        }
        if (api) {
            fetchData()
                .catch(console.error);
        }
    }, [api, repositories, users, filters]);

    return nbClosed;
};

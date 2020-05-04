import { useEffect, useState } from 'react';

export const useGithubPullRequests = (api, { me, repositories, filters, onlyNotReviewed }) => {
    const [pullRequests, setPullRequests] = useState([]);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        let _interval = null;
        async function fetchData() {
            setFetching(true);
            let totalList = [];
            for (const repository of repositories) {
                let pullRequestsList = await api.getOpenPrs(repository);
                totalList = [
                    ...totalList,
                    ...pullRequestsList.filter(pr => !pr.draft && !pr.labels.find(prLabel => !!filters.find(filter => prLabel.name.toLowerCase().indexOf(filter.toLowerCase()) > -1))
                    )
                ];
            }

            setPullRequests(
                totalList
                    .map(pr => ({
                        ...pr,
                        detail: null,
                        reviews: null
                    }))
                    .sort((a, b) => a.created_at.localeCompare(b.created_at))
            );
            setFetching(false);

            for (const pullRequest of totalList) {
                const pullRequestReviews = await api.getPrReviews(pullRequest.base.repo.name, pullRequest.number);

                const hasAlreadyApproved = me !== null && pullRequestReviews.find(review => review.state === "APPROVED" && review.user.login === me);

                if (onlyNotReviewed && hasAlreadyApproved) {
                    setPullRequests(prs => {
                        const index = prs.findIndex(pr => pr.id === pullRequest.id);
                        if (index >= 0) {
                            return [
                                ...prs.slice(0, index),
                                ...prs.slice(index + 1),
                            ];
                        } else {
                            return prs;
                        }
                    });
                } else {
                    const pullRequestDetail = await api.getPrDetails(pullRequest.base.repo.name, pullRequest.number);

                    setPullRequests(prs => {
                        const index = prs.findIndex(pr => pr.id === pullRequest.id);
                        if (index >= 0) {
                            return [
                                ...prs.slice(0, index),
                                {
                                    ...prs[index],
                                    detail: pullRequestDetail,
                                    reviews: pullRequestReviews
                                },
                                ...prs.slice(index + 1),
                            ];
                        } else {
                            return prs;
                        }
                    });
                }
            }
        }
        clearInterval(_interval);
        if (api) {
            fetchData()
                .catch(console.error);
            _interval = window.setInterval(() => {
                fetchData()
                    .catch(console.error);
            }, 120000);
        }

        return () => {
            clearInterval(_interval);
        }
    }, [api, repositories, filters, me, onlyNotReviewed]);

    return [pullRequests, fetching];
};

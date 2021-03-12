import { useEffect, useState } from 'react';

const fetchPRs = async (api, me, { repositories, filteredTags, requiredTags, onlyNotReviewed }) => {
    const allPRs = (await Promise.all(repositories.map(repo => api.getOpenPrs(repo)))).flat();

    return allPRs
        .filter(
            pr => !pr.draft &&
                !pr.labels.some(
                    prLabel => filteredTags.some(tag => prLabel.name.toLowerCase().indexOf(tag.toLowerCase()) > -1)
                ) && (!requiredTags.length || pr.labels.some(prLabel => requiredTags.some(tag => prLabel.name.toLowerCase().indexOf(tag.toLowerCase()) > -1)))
        ).map(pr => ({
            ...pr,
            detail: null,
            reviews: null
        }))
        .sort((a, b) => a.created_at.localeCompare(b.created_at));
}

const addReviewsAndDetails = async (api, me, PRs, { onlyNotReviewed }) => {
    const reviewsByPR = await Promise.all(PRs.map(pullRequest => api.getPrReviews(pullRequest.base.repo.name, pullRequest.number)));

    const PRsToReview = [];

    for (let i = 0; i < reviewsByPR.length; i++) {
        const pullRequest = PRs[i];
        const reviews = reviewsByPR[i];

        const hasAlreadyApproved = me.id && reviews.some(review => review.user?.id === me.id && review.state === "APPROVED");

        if (onlyNotReviewed !== 'true' || !hasAlreadyApproved) {
            PRsToReview.push({
                ...pullRequest,
                reviews,
            });
        }
    }

    const PRsDetails = await Promise.all(PRsToReview.map(pullRequest => api.getPrDetails(pullRequest.base.repo.name, pullRequest.number)));

    return PRsToReview.map((pullRequest, i) => ({ ...pullRequest, detail: PRsDetails[i] }));
}

export const useGithubPullRequests = (api, me, settings) => {
    const [pullRequests, setPullRequests] = useState([]);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        let _interval = null;

        async function fetchData() {
            setFetching(true);

            const PRs = await fetchPRs(api, me, settings);

            setPullRequests(PRs);
            setFetching(false);

            const fullPRs = await addReviewsAndDetails(api, me, PRs, settings);

            setPullRequests(fullPRs);
        }

        clearInterval(_interval);

        if (api && me.id) {
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
    }, [api, me, settings]);

    return [pullRequests, fetching];
};

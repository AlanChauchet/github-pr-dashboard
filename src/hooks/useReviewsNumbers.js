import { useMemo } from 'react';

export const useReviewsNumbers = (pullRequest) => {
    return useMemo(() => {
        let nbApprove = 0;
        let nbRefuse = 0;
        const nbComments = pullRequest.detail ? pullRequest.detail.comments : 0;
        if (pullRequest.reviews) {
            for (const review of pullRequest.reviews) {
                if (review) {
                    switch (review.state) {
                        case 'APPROVED':
                            nbApprove++;
                            break;
                        case 'CHANGES_REQUESTED':
                            // if we have a refused review, we check if there is another approved review by the same author later on
                            let isStaleReview = false;
                            for (const checkReview of pullRequest.reviews) {
                                if (
                                    checkReview.id !== review.id &&
                                    checkReview.user.login === review.user.login &&
                                    checkReview.state === 'APPROVED' &&
                                    Date.parse(checkReview.submitted_at) - Date.parse(review.submitted_at) > 0
                                ) {
                                    isStaleReview = true;
                                }
                            }

                            if (!isStaleReview) {
                                nbRefuse++;
                            }
                            break;
                        default:
                        // do nothing
                    }
                }
            }
        }
        return {
            nbApprove,
            nbRefuse,
            nbComments
        };
    }, [pullRequest]);
};

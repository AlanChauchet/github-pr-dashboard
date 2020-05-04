import { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';

const smoothScroll = new SmoothScroll(undefined, {
    speed: 40000
});

export const useAlwaysScroll = (enabled, el, nbPullRequests) => {
    useEffect(() => {
        if (enabled === 'true' && el && nbPullRequests > 4) {
            const onScrollToBottomStopped = () => {
                document.removeEventListener('scrollStop', onScrollToBottomStopped);
                scrollToTop();
            };
            const onScrollToTopStopped = () => {
                document.removeEventListener('scrollStop', onScrollToTopStopped);
                scrollToBottom();
            };
            const scrollToBottom = () => {
                document.addEventListener('scrollStop', onScrollToBottomStopped);
                smoothScroll.animateScroll(el, undefined, {
                    speed: 40000,
                    easing: 'linear'
                });
            };
            const scrollToTop = () => {
                document.addEventListener('scrollStop', onScrollToTopStopped);
                smoothScroll.animateScroll(0, undefined, {
                    speed: 5000,
                    easing: 'linear'
                });
            };
            document.removeEventListener('scrollStop', onScrollToBottomStopped);
            document.removeEventListener('scrollStop', onScrollToTopStopped);
            scrollToBottom();
        }
    }, [enabled, el, nbPullRequests]);
};

import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ClearIcon from '@material-ui/icons/Clear';
import MessageIcon from '@material-ui/icons/Message';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';

import { useTimeAgo } from '../../hooks/useTimeAgo';
import { useReviewsNumbers } from '../../hooks/useReviewsNumbers';
import { useStyles, FetchingProgress } from './style';

export default ({
                    pullRequest,
                    settings,
                    forwardRef
                }) => {
    const { timeAgoText, timeState } = useTimeAgo(pullRequest.created_at, settings);
    const { nbApprove, nbRefuse, nbComments } = useReviewsNumbers(pullRequest);
    const classes = useStyles();

    const isMergeable = nbApprove >= settings.minNbReviews && pullRequest.detail && pullRequest.detail.mergeable === true && pullRequest.detail.mergeable_state === 'clean';

    return settings.onlyNotReviewed === 'true' && nbApprove >= settings.minNbReviews ? null : (
        <ListItem
            ref={forwardRef}
            className={classnames(classes.item, isMergeable && classes.mergeable, timeState === 'WARNING' && classes.warning, timeState === 'CRITICAL' && classes.critical)}
            component="a"
            href={pullRequest.html_url}
            target="_blank"
            button
        >
            {(!pullRequest.detail || !pullRequest.reviews) && <FetchingProgress className={classes.progress} />}
            {timeState === 'NEW' && <Chip label="New" className={classes.newChip} />}
            <ListItemAvatar>
                <Avatar className={classes.avatar} src={pullRequest.user.avatar_url} />
            </ListItemAvatar>
            <ListItemText
                primary={pullRequest.title}
                secondary={pullRequest.base.repo.name}
                classes={{
                    primary: classes.prTitle,
                    secondary: classes.prProject
                }}
            />
            <div className={classes.extraDataContainer}>
                <div>
                    <div className={`${classes.reviewNumbersContainer} green`}>
                        <Typography className={classes.reviewNumber}>
                            {pullRequest.reviews ? nbApprove : '-'}
                        </Typography>
                        <CheckBoxIcon/>
                    </div>
                    <div className={`${classes.reviewNumbersContainer} red`}>
                        <Typography className={classes.reviewNumber}>
                            {pullRequest.reviews ? nbRefuse : '-'}
                        </Typography>
                        <ClearIcon/>
                    </div>
                    <div className={`${classes.reviewNumbersContainer} grey`}>
                        <Typography className={classes.reviewNumber}>
                            {pullRequest.detail ? nbComments : '-'}
                        </Typography>
                        <MessageIcon/>
                    </div>
                </div>
                <Typography className={classes.timeAgo}>
                    {timeAgoText}
                </Typography>
            </div>
        </ListItem>
    );
};

import React, { useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';

import { useSettings } from './hooks/useSettings';
import { useGithubPullRequests } from './hooks/useGithubPullRequests';
import { useGithubApi } from './hooks/useGithubApi';
import { useAlwaysScroll } from './hooks/useAlwaysScroll';

import PullRequestItem from './components/PullRequestItem';
import ShareLinkButton from './components/ShareLinkButton';

import './App.css';
import { useStyles } from './style';
import { useCDO } from './hooks/useCDO';
import { useWeekNumber } from './hooks/useWeekNumber';
import {useMe} from "./hooks/useMe";

function App() {
    const settings = useSettings();
    const api = useGithubApi(settings.token, settings.organisation);
    const me = useMe(api);
    const [pullRequests, fetching] = useGithubPullRequests(api, me, settings);
    const lastElRef = useRef(null);
    const cdo = useCDO(api, settings);
    const weekOfYear = useWeekNumber();
    useAlwaysScroll(settings.autoScroll, lastElRef.current, pullRequests.length);

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.app}>
                <div className={classes.header}>
                    <div className={classes.loginContainer}>
                        {me.avatarUrl && <Avatar className={classes.avatar} src={me.avatarUrl} />}
                        {me.login && <Typography variant="h3" align="center" className={classes.username} component="div">{me.login}</Typography>}
                    </div>
                    <Typography variant="h3" align="center" className={classes.title} component="div">
                        Week {weekOfYear}
                        {fetching && <CircularProgress className={classes.loader} />}
                    </Typography>
                    <div className={classes.headerEndContainer}>
                        {cdo && <div className={classes.cdoContainer}>
                            <Typography variant="h5">CDO</Typography>
                            <Avatar src={cdo.avatar_url} className={classes.cdoAvatar} />
                            <Typography variant="h5">{cdo.name || cdo.login}</Typography>
                        </div>}
                        <ShareLinkButton settings={settings} />
                    </div>
                </div>
                <List className={classes.list}>
                    {pullRequests.map((pullRequest, index) => (
                        <PullRequestItem
                            key={`pr-${pullRequest.id}`}
                            forwardRef={index === pullRequests.length - 1 ? lastElRef : undefined}
                            pullRequest={pullRequest}
                            settings={settings}
                        />
                    ))}
                </List>
            </div>
        </React.Fragment>
    );
}

export default App;

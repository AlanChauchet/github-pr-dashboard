import React, { useCallback, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/InsertLink';
import Tooltip from '@material-ui/core/Tooltip';

import { useShareLink } from '../../hooks/useShareLink';
import { useStyles } from './style';

export default ({ settings }) => {
    const shareLink = useShareLink(settings);
    const [shareOpen, setShareOpen] = useState(false);
    const onShareClicked = useCallback((ev) => {
        if (ev.clipboardData) {
            ev.clipboardData.setData('text/plain', shareLink);
            setShareOpen(true);
        } else if (window.clipboardData) {
            window.clipboardData.setData('Text', 'custom content from click');
            setShareOpen(true);
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(shareLink)
                .then(() => setShareOpen(true));
        }
    }, [shareLink]);
    const handleClose = useCallback(() => {
        setShareOpen(false);
    }, []);

    const classes = useStyles();

    return (
        <React.Fragment>
            <Tooltip title={shareLink}>
                <IconButton className={classes.shareButton} onClick={onShareClicked}>
                    <ShareIcon/>
                </IconButton>
            </Tooltip>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={shareOpen}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Copied to clipboard !"
            />
        </React.Fragment>
    );
};

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    shareButton: {
        marginRight: '2em',
        '& svg': {
            fontSize: '2em'
        }
    }
}));

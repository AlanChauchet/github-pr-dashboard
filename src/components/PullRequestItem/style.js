import { makeStyles } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import LinearProgress from '@material-ui/core/LinearProgress';

export const orange = '#fcbb26';
export const red = '#ff5c39';
export const green = '#00b388';
export const grey = '#d9d9d6';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    item: {
        backgroundColor: theme.palette.background.paper,
        marginBottom: '2em',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px',
        position: 'relative',
        transition: 'background-color 200ms ease-in-out',
    },
    warning: {
        backgroundColor: lighten(orange, 0.6),
        '&:hover': {
            backgroundColor: lighten(orange, 0.4)
        }
    },
    critical: {
        backgroundColor: lighten(red, 0.6),
        '&:hover': {
            backgroundColor: lighten(red, 0.4),
        }
    },
    mergeable: {
        backgroundColor: lighten(green, 0.6),
        '&:hover': {
            backgroundColor: lighten(green, 0.45),
        },
        '&$warning $timeAgo': {
            color: orange
        },
        '&$critical $timeAgo': {
            color: red
        }
    },
    progress: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: '3px',
        marginRight: '1em'
    },
    extraDataContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: '17vw'
    },
    reviewNumbersContainer: {
        display: 'flex',
        alignItems: 'center',
        '&:not(:last-of-type)': {
            marginBottom: '0.5em',
        },
        '& svg': {
            marginLeft: '0.5em',
            fontSize: '2.5em',
        },
        '&.green svg': {
            color: green
        },
        '&.red svg': {
            color: red
        },
        '&.grey svg': {
            color: grey
        },
    },
    newChip: {
        backgroundColor: red,
        color: 'white',
        position: 'absolute',
        top: -15,
        left: 50,
        fontSize: '1.8vw'
    },
    prTitle: {
        fontSize: '2vw'
    },
    prProject: {
        fontSize: '1.8vw'
    },
    timeAgo: {
        fontSize: '1.8vw'
    },
    reviewNumber: {
        fontSize: '1.8vw'
    },
}));

export const FetchingProgress = withStyles({
    root: {
        height: 2,
        backgroundColor: lighten(green, 0.5),
    },
    bar: {
        backgroundColor: green,
    },
})(LinearProgress);

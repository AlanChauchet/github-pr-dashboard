import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
    app: {
        position: 'relative'
    },
    list: {
        width: '100%',
        paddingTop: 165
    },
    header: {
        zIndex: 2,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fafafa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        position: 'relative',
        margin: '1em 0',
        flex: 1
    },
    username: {
        fontSize: 18,
    },
    loader: {
        marginLeft: '1em',
        position: 'absolute',
    },
    loginContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        marginRight: '1em',
    },
    headerEndContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cdoContainer: {
        marginRight: '5vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cdoAvatar: {
        width: 60,
        height: 60,
        borderRadius: '3px',
    }
}));

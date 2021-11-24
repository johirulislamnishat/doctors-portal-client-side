import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Avatar } from '@mui/material';
import logo from '../../images/logo.png';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFileAlt, faGripHorizontal, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import DashboardContent from './DashboardContent';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },

    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
}));

//badge
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

//Avater
const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

// Item
function Item(props) {
    const { sx, ...other } = props;
    let { url } = useRouteMatch();
    return (
        <Box
            sx={{
                fontSize: '1rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

function Dashboard() {
    // const dummyCategories = ['Hokusai', 'Hiroshige', 'Utamaro', 'Kuniyoshi', 'Yoshitoshi']

    let { url } = useRouteMatch();

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }
    const drawer = (
        <div>
            <div>

                {/* admin menu */}
                <List style={{ fontSize: 16, marginTop: 10 }}>
                    <ListItem button>
                        <Link to={`${url}/admin-dashboard`}>
                            <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link to={`${url}/appointment`} >
                            <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faCalendar} /> <span>Appointment</span>
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link to={`${url}/patients`}>
                            <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faUsers} /> <span>Patients</span>
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link to={`${url}/prescriptions`}>
                            <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faFileAlt} /> <span>Prescriptions</span>
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link to={`${url}/add-doctors`}>
                            <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faUserPlus} /> <span>Add Doctor</span>
                        </Link>
                    </ListItem>
                    {/* {dummyCategories.map((text, index) => (
        <ListItem button key={text}>
            <ListItemText primary={text} />
        </ListItem>
    ))} */}
                </List>

                {/* user menu */}
                <List style={{ fontSize: 16, marginTop: 10 }}>
                    <ListItem button>
                        <Link to={`${url}/dashboard`}>
                            <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link to={`${url}/my-appointment`} >
                            <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faCalendar} /> <span>My Appointment</span>
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link to={`${url}/my-prescriptions`}>
                            <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faUsers} /> <span>My Prescriptions</span>
                        </Link>
                    </ListItem>

                    <ListItem button>
                        <Link to={`${url}/review`}>
                            <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faFileAlt} /> <span>Add Review</span>
                        </Link>
                    </ListItem>

                </List>
            </div>

            <div>
                <ListItem button style={{ fontSize: 16, marginTop: 10 }}>
                    <Link to="/">
                        <FontAwesomeIcon style={{ width: 17, marginRight: 5 }} icon={faSignOutAlt} /> <span>Logout</span>
                    </Link>
                </ListItem>

            </div>
        </div>
    );
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar style={{ backgroundColor: '#ffffff' }} position="fixed" className={classes.appBar}>
                <Toolbar>

                    {/* mobile menu */}
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="d-flex d-md-none">
                        <IconButton
                            color="#000000"
                            aria-label="Open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Stack direction="row" spacing={2}>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="logo" src="/static/images/avatar/1.jpg" />
                            </StyledBadge>

                        </Stack>
                    </div>

                    {/* desktop menu */}
                    <div className={classes.logo} style={{ width: '100%' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Item sx={{ flexGrow: 1 }}>
                                <img alt="logo"
                                    src={logo}
                                    sx={{ width: 56, height: 56 }} />
                            </Item>

                            <Item>
                                <Stack direction="row" spacing={2}>
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar alt="logo" src="/static/images/avatar/1.jpg" />
                                    </StyledBadge>

                                </Stack>
                            </Item>

                        </Box>
                    </div>

                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>

                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon />
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            {/* main content  */}
            <div className={classes.content}>
                <div className={classes.toolbar} />
                <DashboardContent />
            </div>
        </div>
    );
}
Dashboard.propTypes = {
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
};
export default Dashboard;
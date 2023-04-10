import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PeopleIcon from '@mui/icons-material/People';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from "react";
import { useNavigate, Navigate } from 'react-router';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GredsLoader from './GredsLoader/GredsLoader';
import { Checkbox } from '@mui/material';
import { FormGroup, FormControlLabel } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { ListItem } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReportIcon from '@mui/icons-material/Report';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Javascript } from '@mui/icons-material';



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function Content({ userDetails, setUserDetails, allGreds, setAllGreds, setCurrGredDetails, currGredDetails }) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);
    const [openForm, setOpenForm] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [state, setState] = useState("");
    const [stateTag, setStateTag] = useState("");

    const [displayGreds, setDisplayGreds] = useState({
        ...allGreds
    });

    function nameAsc(a, b) {
        return a.title.localeCompare(b.title);
    }

    function nameDesc(a, b) {
        return b.title.localeCompare(a.title);
    }

    function dateAsc(a, b) {
        const date1 = new Date(a.createdAt).getTime();
        const date2 = new Date(b.createdAt).getTime();
        console.log(date1, date2);
        if (date1 < date2) {
            return -1;
        }
        else {
            return 1;
        }
    }

    function handleSearch(event) {
        setState(event.target.value);
        event.preventDefault();
        let displayGreds_ = { ...displayGreds };


        displayGreds_.joinedList = [];
        for (let i = 0; i < allGreds.joinedList.length; i++) {
            if (allGreds.joinedList[i].title.toLowerCase().includes(state.toLowerCase()) || state.length <= 1) {
                displayGreds_.joinedList.push(allGreds.joinedList[i]);
            }
        }

        displayGreds_.othersList = [];
        for (let i = 0; i < allGreds.othersList.length; i++) {
            if (allGreds.othersList[i].title.toLowerCase().includes(state.toLowerCase()) || state.length <= 1) {
                displayGreds_.otherList.push(allGreds.othersList[i]);
            }
        }

        displayGreds_.pendingList = [];
        for (let i = 0; i < allGreds.pendingList.length; i++) {
            if (allGreds.pendingList[i].title.toLowerCase().includes(state.toLowerCase()) || state.length <= 1) {
                displayGreds_.pendingList.push(allGreds.pendingList[i]);
            }
        }

        displayGreds_.blockedList = [];
        for (let i = 0; i < allGreds.blockedList.length; i++) {
            if (allGreds.blockedList[i].title.toLowerCase().includes(state.toLowerCase()) || state.length <= 1) {
                displayGreds_.blockedList.push(allGreds.blockedList[i])
            }
        }
        setDisplayGreds(displayGreds_);
    }

    // function handleSearchTags(event) {
    //     setStateTag(event.target.value);
    //     event.preventDefault();

    //     let displayGreds_ = { ...displayGreds };
    //     displayGreds_.joinedList = [];
    //     for (let i = 0; i < allGreds.joinedList.length; i++) {
    //         for (let j = 0; j < allGreds.joinedList[i].tags.length; j++) {
    //             if (allGreds.joinedList[i].tags[j].includes(stateTag.toLowerCase()) || stateTag.length <= 1) {
    //                 displayGreds_.joinedList.push(allGreds.joinedList[i]);
    //             }
    //         }
    //     }

    //     displayGreds_.othersList = [];
    //     for (let i = 0; i < allGreds.othersList.length; i++) {
    //         for (let j = 0; j < allGreds.othersList[i].tags.length; j++) {
    //             if (allGreds.othersList[i].tags[j].includes(stateTag.toLowerCase()) || stateTag.length <= 1) {
    //                 displayGreds_.othersList.push(allGreds.othersList[i]);
    //             }
    //         }
    //     }

    //     displayGreds_.pendingList = [];
    //     for (let i = 0; i < allGreds.pendingList.length; i++) {
    //         for (let j = 0; j < allGreds.pendingList[i].tags.length; j++) {
    //             if (allGreds.pendingList[i].tags[j].includes(stateTag.toLowerCase()) || stateTag.length <= 1) {
    //                 displayGreds_.pendingList.push(allGreds.pendingList[i]);
    //             }
    //         }
    //     }

    //     displayGreds_.blockedList = [];
    //     for (let i = 0; i < allGreds.blockedList.length; i++) {
    //         for (let j = 0; j < allGreds.blockedList[i].tags.length; j++) {
    //             if (allGreds.blockedList[i].tags[j].includes(stateTag.toLowerCase()) || stateTag.length <= 1) {
    //                 displayGreds_.blockedList.push(allGreds.blockedList[i]);
    //             }
    //         }
    //     }
    //     setDisplayGreds(displayGreds_);
    // }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            All Sub-GREDDIITS
                        </Typography>
                        {/* <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton> */}
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>

                    {/* this is the toggle button for the drawer */}
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>


                    {/* these are the items displayed on the toolbar */}
                    <Divider />
                    <List component="nav">
                        <ListItemButton onClick={() => {
                            navigate("/profile");
                        }}>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                        <ListItemButton onClick={() => {
                            navigate("/mygreds");
                        }}>
                            <ListItemIcon>
                                <AssignmentIndIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Sub-GREDDITS" />
                        </ListItemButton>
                        <ListItemButton onClick={() => {
                            navigate("/allgreds");
                        }}>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="All Sub-GREDDITS" />
                        </ListItemButton>
                        <ListItemButton onClick={() => {
                            navigate("/saved");
                        }}>
                            <ListItemIcon>
                                <SaveIcon />
                            </ListItemIcon>
                            <ListItemText primary="Saved Posts" />
                        </ListItemButton>
                        <ListItemButton onClick={() => {
                            localStorage.removeItem("refreshToken");
                            setUserDetails(false);
                            console.log("here");
                            navigate("/");
                        }}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="LOGOUT" />
                        </ListItemButton>


                        <Divider sx={{ my: 1 }} />

                    </List>
                </Drawer>

                <Drawer variant="permanent" open={open}>

                    {/* this is the toggle button for the drawer */}
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>


                    {/* these are the items displayed on the toolbar */}
                    <Divider />
                    <FormGroup>
                        <Button onClick={() => {
                            let displayGreds_ = { ...displayGreds };
                            displayGreds_.joinedList.sort(nameAsc);
                            displayGreds_.othersList.sort(nameAsc);
                            displayGreds_.blockedList.sort(nameAsc);
                            displayGreds_.pendingList.sort(nameAsc);
                            setDisplayGreds(displayGreds_);
                        }}>SORT ASC.</Button>
                        <Button onClick={() => {
                            let displayGreds_ = { ...displayGreds };
                            displayGreds_.joinedList.sort(nameDesc);
                            displayGreds_.othersList.sort(nameDesc);
                            displayGreds_.blockedList.sort(nameDesc);
                            displayGreds_.pendingList.sort(nameDesc);
                            setDisplayGreds(displayGreds_);
                        }}>SORT DESC.</Button>
                        <Button onClick={() => {
                            let mydate = new Date(displayGreds.joinedList[0].createdAt);
                            let displayGreds_ = { ...displayGreds };
                            displayGreds_.joinedList.sort(dateAsc);
                            displayGreds_.othersList.sort(dateAsc);
                            displayGreds_.blockedList.sort(dateAsc);
                            displayGreds_.pendingList.sort(dateAsc);
                            setDisplayGreds(displayGreds_);
                        }}>SORT BY DATE</Button>
                    </FormGroup>
                </Drawer>

                <Container maxWidth="lg">
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    onChange={handleSearch}
                                    value={state}
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Search SubGREDDIT by title"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                                {/* <TextField
                                    onChange={handleSearchTags}
                                    value={stateTag}
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Search SubGREDDIT by tags"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                /> */}
                                <Grid container>
                                    <Grid item xs>
                                        <p style={{ color: "red" }}>
                                            {state.errorText}
                                        </p>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid>
                        <GredsLoader userDetails={userDetails} allGreds={displayGreds} setAllGreds={setDisplayGreds} setUserDetails={setUserDetails} setCurrGredDetails={setCurrGredDetails} />
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default function AllGredsPage({ userDetails, setUserDetails, setCurrGredDetails, currGredDetails }) {
    const [allGreds, setAllGreds] = useState(false);
    const navigate = useNavigate();
    if (!localStorage.getItem("refreshToken")) {
        return <Navigate to="/" />;
    }
    if (userDetails && allGreds) {
        return <Content userDetails={userDetails} setUserDetails={setUserDetails} allGreds={allGreds} setAllGreds={setAllGreds} setCurrGredDetails={setCurrGredDetails} currGredDetails={currGredDetails} />;
    }
    else if (userDetails) {
        fetch("http://localhost:4000/greds/list", {
            method: "GET",
            headers: {
                "authorization": "Bearer " + String(localStorage.getItem("refreshToken")),
                "Content-Type": "application/json",
            },
        })
            .then(
                (res) => {
                    if (res.ok) {
                        res.json()
                            .then((body) => {
                                setAllGreds(body);
                                console.log(body);
                                return (
                                    <div>
                                        Loading...
                                    </div>
                                )
                            });
                    }
                    else {
                        res.json()
                            .then((body) => {
                                let errMsg = body.message;
                                console.log(errMsg);
                            });
                    }
                }
            )

    }
    else {
        fetch("http://localhost:4000/auth/refresh", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "refreshToken": localStorage.getItem("refreshToken"),
            },
        })
            .then(
                (res) => {
                    if (res.ok) {
                        let body = res.json();
                        body.then((body) => {
                            setUserDetails(body);
                        });
                    }
                    else {
                        return navigate("/");
                    }
                }
            )
            .catch((err) => {
                console.log(err);
            });

        return (
            <div>
                Loading...
            </div>
        )
    }
}
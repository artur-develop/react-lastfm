import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import {linkPage} from "./Utils/Utils";
import RadioIcon from '@material-ui/icons/Radio';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function ClippedDrawer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography style={{textTransform: "uppercase"}} variant="h6" noWrap>
                        <RadioIcon style={{marginRight: "10px", verticalAlign: "sub", fontSize: "30px"}}/>
                        <span style={{fontWeight: "bold"}}>Last.fm </span>
                        <span>React</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button onClick={() => linkPage("/")}>
                            <ListItemIcon><LibraryMusicIcon /></ListItemIcon>
                            <ListItemText primary="Top tracks" />
                        </ListItem>
                        <ListItem button onClick={() => linkPage("/searchTrack")}>
                            <ListItemIcon><SearchIcon /></ListItemIcon>
                            <ListItemText primary="Search" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

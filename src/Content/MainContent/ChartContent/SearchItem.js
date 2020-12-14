import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function InteractiveList({ artistName, trackName }) {
    return (
        <div >
            <ListItem>
                <ListItemText primary={artistName + " - " + trackName}  />
            </ListItem>
        </div>
    );
}
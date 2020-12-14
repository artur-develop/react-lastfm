import React, { useState} from 'react'
import {get} from "./Server/API";
import {API_KEY} from "../Consts";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./SearchTrack.css"
import SearchItem from "./ChartContent/SearchItem";
import {List} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));

function SearchTrack() {
    const [tracksDate, setTracksDate] = useState([]);
    const [trackName, setTrackName] = useState("");
    const classes = useStyles();

    const loadData = async () => {
        const date = await get("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+trackName+"&api_key="+API_KEY+"&format=json")
        setTracksDate(date?.results?.trackmatches.track)
    }

    function submitHandler(event) {
        event.preventDefault()

        if (trackName.trim()) {
            loadData()
        }
    }

    function showList() {

        return (
            <List className={classes.demo}>
                {tracksDate.map((item, index) => (
                    <div key={index}>
                        <SearchItem artistName={item.artist} trackName={item.name}/>
                        <Divider/>
                    </div>
                ))}
            </List>
        )
    }

    return (
        <form className='formContainer' style={{marginBottom : '1rem' }} onSubmit={submitHandler}>
            <div>
                <TextField size="small" value={trackName} onChange={event => setTrackName(event.target.value)} label="Enter track name"  />
                <Button className="buttonGo" type='submit' variant="contained" color="primary">
                    Go!
                </Button>
                {tracksDate&& (showList())}
            </div>
        </form>
    )
}

export default SearchTrack
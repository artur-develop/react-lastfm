import React, {useEffect, useState} from 'react'
import {get} from "./Server/API";
import {API_KEY} from "../Consts";
import "./Chart.css"
import GridItem from "./ChartContent/GridItem";
import Grid from "@material-ui/core/Grid";


function Chart() {
    const [tracksDate, setTracksDate] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const date = await get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key="+API_KEY+"&format=json")
            setTracksDate(date?.tracks?.track)
        }
        loadData()
    }, [] )

    return (
        <>
            <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={3}>
                {
                    tracksDate.map((item, index) => (
                            <GridItem key={index}
                                      trackName={item.name}
                                      trackImage={item.image[1]["#text"]}
                                      artistName={item.artist.name}
                                      artistUrl={item.artist.url}/>
                    ))
                }
            </Grid>
        </>
    )
}

export default Chart;
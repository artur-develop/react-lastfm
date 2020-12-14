import React, {useEffect, useState} from 'react'
import {get} from "../Server/API";
import {API_KEY} from "../../Consts";
import {useParams} from "react-router";
import "./About.css";
import Chip from '@material-ui/core/Chip';
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {linkPage} from "../Utils/Utils";

function About() {
    let { artistName } = useParams()
    const [artistInfo, setArtistInfo] = useState()

    useEffect(() => {
        const loadData = async () => {
            const date = await get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+artistName+"&api_key="+API_KEY+"&format=json")
            setArtistInfo(date?.artist)
        }
        loadData()
    }, [] )

    return (
        <>
            <div>
                <div className="ArtistInfo">
                    <h1>About "{artistName}"</h1>
                    {artistInfo !== undefined &&
                        <div>
                            <div>
                                <img src={artistInfo.image[2]["#text"]}/>
                            </div>
                            <div className="tagsArea">
                                <div className="tagsHeader">Tags:</div>
                                { artistInfo.tags.tag.map((tag, index) => (
                                    <div className="tags" key={index}>
                                        <Chip label={tag.name} variant="outlined"/>
                                    </div>
                                )) }
                            </div>
                            <div className='bio' dangerouslySetInnerHTML={{__html: artistInfo.bio.content}}></div>
                        </div>
                    }
                    <Button
                        variant="contained"
                        color="secondary"
                        className="buttonBack"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() => linkPage("/")}
                    >Back</Button>
                </div>
            </div>
        </>
    )
}

export default About
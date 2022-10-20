import React, {useEffect, useState} from "react";
import "./StromberQuotes.scss";
import axios from "axios";

function StromberQuotes() {
    const url = 'https://www.stromberg-api.de/api/quotes/random';
    const [quote, setQuote] = useState(null);
    const [name, setName] = useState(null);
    const [title, setEpisodeTitle] = useState(null);
    const [episode, setEpisodeEpisode] = useState(null);
    const [season, setEpisodeSeason] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setQuote(response.data.quote);
                setName(response.data.character.name);
                setEpisodeTitle(response.data.episode.title);
                setEpisodeEpisode(response.data.episode.episode);
                setEpisodeSeason(response.data.episode.season)
            })
    }, [url])

    return (
        <div>
            <h1 className='strombergquote'>"{quote}"</h1>
            <h2 className='strombergdata'>({name} in "{title}" - Season: {season}, Episode: {episode})</h2>

        </div>
    )
}


export default StromberQuotes;
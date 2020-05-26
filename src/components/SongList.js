import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList  = () => {
    //useState hook is required to be able to use state with functional components
    const [songs,setSongs] = useState([
        {title: "Down Below", id: 1},
        {title: "Armed and Dangerous", id: 2},
        {title: "Swervin", id: 3},
    ]);

    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuidv4()}])
    }
    return (
        <div className = "song-list">
            <ul>
                {songs.map(song => {
                    return (<li key = {song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong = {addSong}/>
        </div>
    )
}

export default SongList;
